import $ from 'jquery'

const getAvatar = (el: string) => {
  const avatar = el.find('.pv-top-card__image img')
  return avatar && avatar.attr('src')
}

const getBackground = (el: string) => {
  return el.find('.pv-about__summary-text').text().trim()
}

const getEmail = (el: string) => {
  let val

  val =
    el.find('.ci-email .pv-contact-info__contact-item').first().text() ||
    el.find('.abook-email a').first().text()

  return $.trim(val)
}

const getName = (el: string) => {
  const name = el.find('.pv-top-card--list li:first').text().trim()

  return (name || '').split(' ')
}

const getFirstName = (el: string) => {
  const name = getName(el)

  return name[0]
}

const getLastName = (el: string) => {
  const name = getName(el)

  return name.slice(1).join(' ')
}

const getSkype = (el: string) => {
  let text = ''

  el.find('#im-view li').each(function () {
    var match
    if (
      (match = $(el)
        .text()
        .match(/(.+)\([Ss]kype\)/))
    ) {
      return $.trim(match[1])
    }
  })

  return text
}

const getPhoneMobile = (el: string) => {
  let text

  text = el.find('.ci-phone .pv-contact-info__contact-item').first().text()
  text = text.substring(0, text.indexOf('('))

  return $.trim(text)
}

const getTitle = (html: string) => {
  return html.find('.pv-top-card h2').text().trim()
}

const scraper = async (html: string) => {
  const parsed = $(html)

  return {
    avatarUrl: getAvatar(parsed),
    type: 'linkedin',
    email: getEmail(parsed),
    first_name: getFirstName(parsed),
    last_name: getLastName(parsed),
    title: getTitle(parsed),
    background: getBackground(parsed),
    skype: getSkype(parsed),
    tags: ['contact clipper', 'linkedin'],
    mobile: getPhoneMobile(parsed),
  }
}

export default scraper
