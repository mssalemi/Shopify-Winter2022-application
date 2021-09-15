import React, {useEffect, useState} from "react";
import {
    Layout,
    Page,
    MediaCard,
    TextContainer
  } from '@shopify/polaris';
import axios from 'axios';
import { useParams } from "react-router";


export default function SharePage(){
    const params = useParams();
    const [data, setData] = useState({});

    const getData = async (value) => {
        const nasaData = await axios.get(`https://images-api.nasa.gov/search?nasa_id=${value}`);
        console.log(nasaData)
        setData(nasaData?.data?.collection)
    }
    const description = ({description , date_created}) => {
        return <TextContainer>
          <p>{description}</p>
          <p><b>Date Created: </b>{date_created}</p>
        </TextContainer>
      } 
    console.log(params)
    useEffect(() => {
        if(params?.id){
            getData(params.id)
        }
    }, [])
    return <Page>
        <Layout>
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
            <MediaCard title={transformData.title} description={description(transformData)} size="large">
              <img alt="" width="100%" height="100%" style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }} src={transformData.link} />
            </MediaCard>
        </Layout.Section>
      })}
      </Layout>
    </Page>
}