
const handleClarifyApiCall = (req, res) => {
  const PAT = "791589e8b409406289142c3eb00dd6a1"
  const USER_ID = "c2dc2bha1jx2"
  const APP_ID = "facerecognitionbrain"
  const MODEL_ID = "face-detection"
  const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105"
  const IMAGE_URL = req.body.input

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  })

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  }

  fetch(
    "https://api.clarifai.com/v2/models/" +
      MODEL_ID +
      "/versions/" +
      MODEL_VERSION_ID +
      "/outputs",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      const regions = result.outputs[0].data.regions
      const boxsArray = regions.map((region) => {
        const boundingBox = region.region_info.bounding_box
        const topRow = boundingBox.top_row
        const leftCol = boundingBox.left_col
        const bottomRow = boundingBox.bottom_row
        const rightCol = boundingBox.right_col

        const data = { topRow, leftCol, bottomRow, rightCol }
        return data
      })
      return boxsArray
    })
    .then(faceboxs => {
        res.json(faceboxs)
    })
    .catch(err => res.status(400).json("Api Error!"))
}

const handleImage = (db) => (req, res) => {
  const { id } = req.body
  // Find user by ID and update the image count
  db("users")
    .where("id", "=", id)
    .returning("count")
    .increment("count", 1)
    .then((count) => res.json(Number(count[0].count)))
    .catch((err) => res.status(400).json("Error!!!"))
}

module.exports = {
  handleImage: handleImage,
  handleClarifyApiCall: handleClarifyApiCall,
}
