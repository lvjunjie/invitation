export function inView () {
  return {
    inserted: function (el, binding) {
      console.log(binding.value)
      const className = binding.value

      function addClass () {
        const toTop = $(el).offset().top - $(window).scrollTop()
        console.log(toTop)
        if (toTop >= 0 && toTop <= 300) {
          if (!$(el).hasClass(className)) {
            $(el).addClass(className)
          }
        }
      }
      $(window).scroll(function () {
        addClass()
      })
    }
  }
}
