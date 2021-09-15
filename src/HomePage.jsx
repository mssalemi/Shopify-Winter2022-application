import React, {useState, useCallback, useEffect} from 'react';
import Heart from "react-animated-heart";
import '@shopify/polaris/dist/styles.css'
import './App.css'
import {
  Layout,
  Page,
  Button,
  TextField,
  MediaCard,
  Frame, Loading, TextContainer, Toast
} from '@shopify/polaris';
import axios from 'axios';

export default function HomePage() {
  const [data, setData] = useState({});
  const [likeImages , setLikeImages] = useState([]);
  const [value, setValue] = useState('Stars');
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const getData = async () => {
    const nasaData = await axios.get(`https://images-api.nasa.gov/search?q=${value}&media_type=image`);
    console.log(nasaData)
    setData(nasaData?.data?.collection)
  }

  const toastMarkup = active ? (
    <Toast content="Link Copided" onDismiss={toggleActive} />
  ) : null;

  const description = ({description , date_created}) => {
    return <TextContainer>
      <p>{description}</p>
      <p><b>Date Created: </b>{date_created}</p>
    </TextContainer>
  }

  const getAndSetLikeImagesinLocal = (image) => {
    if(localStorage.getItem("URLS")){
      let parseLocalData = JSON.parse(localStorage.getItem("URLS"));
      let findIdx = parseLocalData?.find(x => x.link == image.link)
      if(findIdx){
          parseLocalData = parseLocalData?.filter(x => x.link !== image.link)
          parseLocalData = [...parseLocalData];
      }else {
        parseLocalData = [...parseLocalData , image];
      }
      localStorage.setItem("URLS" , JSON.stringify(parseLocalData));
      setLikeImages(parseLocalData.map(x => x.link))
    }else {
      setLikeImages([image.link])
      localStorage.setItem("URLS" , JSON.stringify([image]));
    }

  }

  const copySharebaleLink = (value) => {
    navigator.clipboard.writeText(window.location.origin + "/shareable/" + value);
  }
  useEffect(() => {
    getData();
    if(localStorage.getItem("URLS")){
      let parseLocalData = JSON.parse(localStorage.getItem("URLS"));
      setLikeImages(parseLocalData.map(x => x.link))
    }
  }, []);
  return <div>
    <Page fullWidth divider title="Nasa App">
    <Layout>
      <Layout.Section oneHalf>
        <TextField  value={value} onChange={handleChange} />
      </Layout.Section>
      <Layout.Section oneHalf>
        <Button style={{marginTop: "20px"}} onClick={getData}>Search</Button>
      </Layout.Section>
      <Layout.Section>
      </Layout.Section>
    </Layout>
    {/* <NavBar /> */}
      {data?.items ? <Layout>
      {data?.items?.map(imgData => {
        let transformData = {
          title : imgData?.data[0].title,
          description : imgData?.data[0]?.description_508 || imgData?.data[0]?.description,
          link: imgData?.links?.find(x => x.render === "image")?.href,
          data : imgData.data[0],
          date_created : imgData?.data[0].date_created
        };
        console.log(transformData)
        return <Layout.Section>
            <MediaCard title={transformData.title} primaryAction={{
              content: <Heart isClick={likeImages.indexOf(transformData.link) !== -1} onClick={() => getAndSetLikeImagesinLocal(transformData)} />,
              onAction: () => {}
            }} description={description(transformData)} popoverActions={[{ content: 'Copy Shareable Link', onAction: () => { copySharebaleLink(transformData?.data?.nasa_id); toggleActive()} }]} size="large">
              <img alt="" width="100%" height="100%" style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }} src={transformData.link} />
            </MediaCard>
        </Layout.Section>
      })}
      <Frame>
      {toastMarkup}
      </Frame>
      </Layout> : <div style={{height: '100px'}}>
  <Frame>
    <Loading />
  </Frame>
</div>}
      
  </Page>
  </div>
}