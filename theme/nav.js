import link from './link'

const Item = ({ name, path, active }) => {
  if (!active) {
    return <link.a href={path} prefetch>{name}</link.a>
  }
  return <span>{name}</span>
}

export default ({ url }) => <div className='navigation'>
  <Item name='文章' path='/posts' active={url === '/posts'}/>
  <Item name='小说' path='/novels' active={url === '/novels'}/>
  <Item name='诗' path='/poetry' active={url === '/poetry'}/>
  <Item name='标签' path='/tags' active={url === '/tags'}/>
  <Item name='关于我' path='/' active={url === '/'}/>

  <style jsx>{`
    .navigation {
      display: flex;
      justify-content: flex-end;
      margin: 3rem -.5rem 1rem;
    }
    .navigation :global(span) {
      color: #999;
      cursor: default;
    }
    .navigation :global(a), .navigation :global(span) {
      margin: 0 .5rem;
    }
    .webring: {
      line-height: 1
      display: inline-block
    }
  `}</style>
</div>
