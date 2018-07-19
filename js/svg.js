(function() {
  console.log('hello world');

  var projects = Snap('projects')

  Snap.load('../assets/sides.svg', (svg) => {
    group.drag()
    group.append(svg)
  })
})()
