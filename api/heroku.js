const fetch = require('node-fetch')
module.exports = async function(req, res) {
  if (!req.query.discord || req.body.action !== 'create') {
    return res.end()
  }
  const body = {
    embeds: [{
      title: `[${req.body.data.app.name}] ${req.body.data.description}`,
      description: req.body.data.slug.commit_description,
      color: 7419530
    }]
  }
  await postTo(req.query.discord, body)
  res.end()
}

async function postTo(url, body) {
  return fetch(url, {
    method: 'POST',
    body:    JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
}
