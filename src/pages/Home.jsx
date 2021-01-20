import React, { useEffect, useContext } from 'react';
import SpaceContext from '../context/SpaceContext';
import { useQuery, gql } from '@apollo/client';

import Header from '../components/Header';
import Slider from '../components/Slider';

const COMPANY_SPACEX = gql`
  {
    company {
      name
      summary
      founder
      links {
        website
        elon_twitter
        twitter
      }
      coo
      cto_propulsion
      employees
      valuation
      headquarters {
        address
        city
        state
      }
      test_sites
      vehicles
      launch_sites
    }
  }
`;

function Home() {
  const { setToggleProfile } = useContext(SpaceContext);

  useEffect(() => {
    setToggleProfile(false);
  }, [setToggleProfile]);

  const { loading, error, data } = useQuery(COMPANY_SPACEX)
  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;



  return (
    <main className="home-container">
      <Header />
      <section className="home-body">
        <h1 hidden>{data.company.name}</h1>
        <section className="home-images">
          <Slider />
        </section>
        <section className="home-info">
          <p>{data.company.summary}</p>
          <br />
          <ul>
            <li>Founder CEO {"&"} CTO:
              <a target="_blank" rel="noreferrer" href={data.company.links.elon_twitter}>
              {`${data.company.founder}`}
              </a>
            </li>
            <li>COO: {data.company.coo}</li>
            <li>CTO Propulsion: {data.company.cto_propulsion}</li>
            <li>Emplooyes: {data.company.employees}</li>
            <li>Valuation: $ {data.company.valuation},00</li>
            <li>Address: {data.company.headquarters.address} in {data.company.headquarters.city}, {data.company.headquarters.state}</li>
            <li>Test Sites: {data.company.test_sites}</li>
            <li>Launch Sites: {data.company.launch_sites}</li>
            <li>Vehicles: {data.company.vehicles}</li>
            <li>Links: <a target="_blank" rel="noreferrer" href={data.company.links.website}>
                Website
              </a>{' '}
              <a target="_blank" rel="noreferrer" href={data.company.links.twitter}>
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default Home;
