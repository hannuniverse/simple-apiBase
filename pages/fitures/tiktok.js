/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const axios = require("axios")

module.exports = async (req, res) => {
  const urls = req.query.urls

  if (!urls) {
    return res.status(400).json({
      error: "Url Tiktok Nya Mana?"
    })
  }

  try {
   async function tikwmdl(url) {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
    'Referer': 'https://www.tikwm.com/',
  }
  const payload = `url=${encodeURIComponent(url)}&count=12&cursor=0&web=1&hd=1`
  const kacunkwm = await axios.post('https://www.tikwm.com/api/', payload, { headers })
  const data = kacunkwm.data.data
  return {
    nickname: data.author.nickname,
    unique_id: data.author.unique_id,
    author_id: data.author.id,
    avatar: `https://www.tikwm.com${data.author.avatar}`,
    mentioned_users: data.mentioned_users,
    create_time: data.create_time,
    download_count: data.download_count,
    comment_count: data.comment_count,
    play_count: data.play_count,
    duration: data.duration,
    original: data.music_info.original,
    play: `https://www.tikwm.com${data.play}`,
    hdplay: `https://www.tikwm.com${data.hdplay}`,
    wmplay: `https://www.tikwm.com${data.wmplay}`,
    size: data.size,
    hd_size: data.hd_size,
    wm_size: data.wm_size,
    title: data.title,
    music: `https://www.tikwm.com${data.music}`,
    play_music: data.music_info.play,
    music_title: data.music_info.title,
    music_duration: data.music_info.duration,
    digg_count: data.digg_count,
    share_count: data.share_count,
    cover_url: `https://www.tikwm.com${data.cover}`,
  }
}
    const hasil = await tikwmdl(urls)
    res.status(200).json({
      hasil
    })
  } catch (error) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}
