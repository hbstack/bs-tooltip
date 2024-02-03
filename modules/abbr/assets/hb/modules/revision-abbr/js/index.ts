import Tooltip from "js/bootstrap/src/tooltip"

(() => {
  document.querySelectorAll('abbr').forEach(element => {
    let tooltip
    element.addEventListener('mouseenter', () => {
      tooltip = Tooltip.getOrCreateInstance(element, {
        placement: 'bottom'
      })
      tooltip.show()
    })
    element.addEventListener('mouseout', () => {
      tooltip && tooltip.dispose()
    })
  });
})()
