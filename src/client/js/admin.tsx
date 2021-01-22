import { render as Home } from '../../layouts/home.11ty';
import markdownIt from 'markdown-it';

import { h } from '../../util/h';

const md = markdownIt();

function getData ({ entry }: any) {
  const data = entry.get('data').toJS();
  data.content = md.render(data.body);
  return data;
}

(window as any).CMS.registerPreviewTemplate('home', (props: any) => {
  const data = getData(props);
  data.intro = md.render(data.intro);
  data.collections = (window as any).__COLLECTIONS__;

  return (
    <Home {...data}></Home>
  )
});