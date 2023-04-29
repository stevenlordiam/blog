const YEAR = (new Date).getFullYear()

export default () => <footer>
  <p>Subscribe via <a href="https://stevenliu.one/feed.xml">RSS</a></p>
  <abbr title='This website and all its content are licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.'>CC BY-NC-SA 4.0</abbr> © 2013 - 2023 ❤️ Steven Liu
  <style jsx>{`
    footer {
      margin-bottom: 2rem;
      font-size: .8rem;
      text-align: center;
      color: #999;
    }
    abbr {
      cursor: help;
      text-decoration: none;
      border-bottom: 1px dotted;
    }
  `}</style>
</footer>
