export default function Home(props) {
    return (
      <div>
        <h2>Welcome to our homepage.</h2>
        <p>This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.</p>
        <p>The weather: {props.forecast}</p>
      </div>
    )
  }
  
//if the data is super specific and not wanted to be cached then you can use this dynamic method
//not the fastest approach, but this is what you do when you need something truly dynamic - this runs on every request
export async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()

    return {
        props: {
        forecast: data.properties.periods[0].detailedForecast
        }
    }
}