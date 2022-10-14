import NFTZone from "../components/mint_page/NFT_zone";

export default function About({ data }) {
  return (
    <div>
      <NFTZone />
      <h1>{data.data[0].id}</h1>
      <h1>{data.data[1].id}</h1>
      <h1>{data.data[2].id}</h1>
      <h1>{data.data[3].id}</h1>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const url = "http://localhost:3000/api/NFTsMongo/";

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
