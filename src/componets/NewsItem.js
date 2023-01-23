
//function based COMPONENT
import React,{useContext} from 'react'
import { Mode } from '../App';
// import OpenDialog from './OpenDialog'
const NewsItem=(props)=> {    
    const theme = useContext(Mode);
    let description = props.description && props.description.substr(0, 200).concat(".....");
    let title = props.title && props.title.substr(0, 100).concat(".....");
        return (         
            <div  className='container my-5'   >              
                <div className="card" style={{backgroundColor:theme.mode==='bright'?'azure':'#1f2327' ,color:theme.mode ==='dark'?'azure':'black',boxShadow:theme.mode==='dark'?'0 4px 8px 0 rgb(63, 103, 144), 0 6px 20px 0 rgb(63, 103, 144)':'0 4px 8px 0 #6c757d, 0 6px 20px 0 #6c757d'}} >
                    <img src={props.urlToImage} className="card-img-top" alt="img" height="200px"/>
                    
                    <div className="card-body" style={{height:"450px"}}>               
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{description}</p>
                        <span class="badge rounded-pill bg-danger" style={{color:'#393a3c !important'}}>{props.source}</span>
                        <p class="card-text"><small class="text-muted">By{props.author?props.author:"Unknown"}  at {new Date(props.authordate).toGMTString()}</small></p>
                        <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                        {/* <OpenDialog/> */}                    
                    </div>                  
                </div>
            </div>           
        )    
}
export default NewsItem

