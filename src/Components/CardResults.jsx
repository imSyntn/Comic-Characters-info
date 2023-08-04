import React, {useState, useEffect} from 'react'
import './CardResults.scss';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
// import AbilityCard from './AbilityCard';
import { useParams } from 'react-router-dom';
import { SiPowerautomate } from "react-icons/si";

const CardResults = () => {
    const[clickedData, setClickedData]=useState(null);
    const params = useParams();

    const idFetch = async ()=>{
        try {
            setClickedData(null);
            const idReq = await fetch(`https://superheroapi.com/api/141284608947891/${params.id}`);
            const idRes = await idReq.json();
            // console.log(idRes);
            setClickedData(idRes);
        } catch (error) {
            alert("Something went wrong");
        }
    }

    useEffect(()=>{
        idFetch();
    },[params])
    
  return (
    <div className='CardResults'>
        <Link to={'/'}>
            <BsFillArrowLeftCircleFill />
        </Link>

        {console.log(clickedData)}

        {
            clickedData?
            (<>
                <img src={`${clickedData.image.url}`} alt={`${clickedData.name}`} />
            
                <div className="fetched-data">
                    <div className="fetched-data-header">
                            <h2 className='hero-name'>{clickedData.name}</h2>
                        </div>
        
                    <div className="fetched-data-details">
                            <div className='id-class' id="Powerstats">
                                <h2>Powerstats</h2>
        
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Intelligence</p>
                                </div>
                                <p>{clickedData.powerstats.intelligence}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Durabiliy</p>
                                </div>
                                <p>{clickedData.powerstats.durability}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Power</p>
                                </div>
                                <p>{clickedData.powerstats.power}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Combat</p>
                                </div>
                                <p>{clickedData.powerstats.combat}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Speed</p>
                                </div>
                                <p>{clickedData.powerstats.speed}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Strength</p>
                                </div>
                                    <p>{clickedData.powerstats.strength}</p>
                                </div>
        
                        </div>
                        <div className='id-class' id="Biography">
                            <h2>Biography</h2>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Full Name</p>
                                </div>
                                <p>{clickedData.biography['full-name']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Place of Birth</p>
                                </div>
                                <p>{clickedData.biography['place-of-birth']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Alignment</p>
                                </div>
                                <p>{clickedData.biography.alignment}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>First Appearance</p>
                                </div>
                                <p>{clickedData.biography['first-appearance']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Publisher</p>
                                </div>
                                <p>{clickedData.biography.publisher}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Alter Egos</p>
                                </div>
                                <p>{clickedData.biography['alter-egos']}</p>
                            </div>
                        </div>
                        <div className='id-class' id="Appearance">
                            <h2>Appearance</h2>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Gender</p>
                                </div>
                                <p>{clickedData.appearance.gender}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Eye Color</p>
                                </div>
                                <p>{clickedData.appearance['eye-color']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Hair Color</p>
                                </div>
                                <p>{clickedData.appearance['hair-color']}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Race</p>
                                </div>
                                <p>{clickedData.appearance.race}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Height</p>
                                </div>
                                <p>{`${clickedData.appearance.height[0]}ft`}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Weight</p>
                                </div>
                                <p>{clickedData.appearance.weight[1]}</p>
                            </div>
                        </div>
                        <div className='id-class' id="Others">
                            <h2>Others</h2>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Base</p>
                                </div>
                                <p>{clickedData.work.base}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Occupation</p>
                                </div>
                                <p>{clickedData.work.occupation}</p>
                            </div>
                            {/* <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Relatives</p>
                                </div>
                                <p>{clickedData.connections.relatives}</p>
                            </div>
                            <div className='AbilityCard'>
                                <div className="ability-icon-name">
                                    <SiPowerautomate />
                                    <p>Group Affilation</p>
                                </div>
                                <p>{clickedData.connections['group-affiliation']}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>)
            :
            (<>
            <h1 className='please-wait'>Please wait...</h1>
            </>)
        }
    </div>
  )
}

export default CardResults