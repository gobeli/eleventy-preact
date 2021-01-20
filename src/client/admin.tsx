import { render as Home } from '../layouts/home.11ty';

const h = (window as any).h;

function getData ({ entry }: any) {
  const data = entry.get('data').toJS();
  data.content = data.body;
  return data;
}

(window as any).CMS.registerPreviewTemplate('home', (props: any) => {
  const data = getData(props);
  return (
    <Home {...data}></Home>
  )
});