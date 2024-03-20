export const sourcesContainer = [];
export function NewSource(
  Name = null,
  sub = null,
  Logo = null,
  Topics = null,
  Topics2 = null,
  rssUrl = null,
  _genre = null
) {
  let topics = [],
    favicon = () => {
      let e = Name.includes(".")
        ? `https://${Name.toLowerCase()}/favicon.ico`
        : `https://${Name.toLowerCase().replaceAll(" ", "")}.com/favicon.ico`;
      return sub || e;
    },
    [name, url, logo] = [Name, favicon(), Logo];
  return (
    Topics2
      ? Topics2.map((item) => {
          let [title, url] = [
            item.replaceAll("-", " "),
            `${rssUrl[0]}${eval(rssUrl[1]).replaceAll(" ", "-").toLowerCase()}${
              rssUrl[2] ?? ""
            }`,
          ];
          if (title) {
            let arr = title.split(/\/| |-/gi),
              formattedWords = [];
            arr.map((e) => {
              let t = e[0].toUpperCase(),
                r = e.slice(1).toLowerCase(),
                o = t + r;
              formattedWords.push(o), (title = formattedWords.join(" "));
            });
          }
          topics.push({ title, url });
        })
      : Topics.map((e) => {
          let [t, r] = [e[0], e[1]];
          topics.push({ title: t, url: r });
        }),
    sourcesContainer.push({ name, url, logo, topics, _genre })
  );
}
export function UrlEncoder(e) {
  return encodeURIComponent(e);
}
export function ElapsedTime(e) {
  let t = new Date(e).getTime(),
    r = Date.now(),
    o = (r - t) / 1e3,
    i = o / 60,
    n = i / 60,
    l = n / 24,
    s = l / 7,
    c = s / 4,
    p = c / 12;
  return o >= 1 && o < 60
    ? o.toFixed(0) + (2 > o.toFixed(0) ? " second" : " seconds")
    : i >= 1 && i < 60
    ? i.toFixed(0) + (2 > i.toFixed(0) ? " minute" : " minutes")
    : n >= 1 && n < 24
    ? n.toFixed(0) + (2 > n.toFixed(0) ? " hour" : " hours")
    : l >= 1 && l < 7
    ? l.toFixed(0) + (2 > l.toFixed(0) ? " day" : " days")
    : s >= 1 && s < 4
    ? s.toFixed(0) + (2 > s.toFixed(0) ? " week" : " weeks")
    : c >= 1 && c < 12
    ? c.toFixed(0) + (2 > c.toFixed(0) ? " month" : " months")
    : p >= 1
    ? p.toFixed(0) + (2 > p.toFixed(0) ? " year" : " years")
    : r - t
    ? "Sometime"
    : void 0;
}
export function articleLink(e) {
  let t = e[0];
  return "object" == typeof t ? t.$.href : t;
}
export function titlePic(e, t, r) {
  if (Object.keys(r).includes("rss")) {
    if (Object.prototype.hasOwnProperty.call(t[e], "enclosure"))
      return t[e].enclosure[0].$.url;
    if (Object.prototype.hasOwnProperty.call(t[e], "media:group"))
      return t[e]["media:group"][0]["media:content"][0].$.url;
    if (Object.prototype.hasOwnProperty.call(t[e], "media:content"))
      return t[e]["media:content"][0].$.url;
    if (
      Object.prototype.hasOwnProperty.call(t[e], "description") &&
      t[e].description[0].includes("src=")
    )
      return t[e].description[0].split('src="')[1].split('"')[0];
    if (
      Object.prototype.hasOwnProperty.call(t[e], "a10:content") &&
      t[e]["a10:content"][0]._.includes("url(&quot;")
    )
      return t[e]["a10:content"][0]._.split("&quot;")[1];
    if ("The Diplomat" === t[e].title) return !1;
    if (
      Object.prototype.hasOwnProperty.call(t[e], "description") &&
      t[e].description[0].includes("src=")
    )
      return t[e].content[0];
  }
  if (Object.keys(r).includes("rdf:RDF")) return !1;
}
export function articleDescription(e, t, r) {
  if (
    Object.keys(r).includes("rss") &&
    Object.prototype.hasOwnProperty.call(t[e], "description")
  ) {
    let o =
      0 ===
        t[e].description[0].replaceAll("\n", "").replaceAll(" ", "").length ||
      t[e].description[0].includes("DefenceTalk");
    if (Object.prototype.hasOwnProperty.call(t[e], "description") && !o) {
      if (t[e].description[0].includes("</") && !o)
        return t[e].description[0].replaceAll(/<[^>]*>/gi, "").trim();
      if (t[e].description[0] && !o) return t[e].description[0].trim();
    }
    return !1;
  }
  return Object.keys(r).includes("rdf:RDF") &&
    Object.prototype.hasOwnProperty.call(t[e], "description")
    ? t[e].description
    : Object.keys(r).includes("feed") &&
      Object.prototype.hasOwnProperty.call(t[e], "entry")
    ? t[e].content[0].replaceAll(/<[^>]*>/gi, "").trim()
    : Object.keys(r).includes("feed") &&
      Object.prototype.hasOwnProperty.call(t[e], "summary")
    ? t[e].summary[0].replaceAll(/<[^>]*>/gi, "").trim()
    : void 0;
}
