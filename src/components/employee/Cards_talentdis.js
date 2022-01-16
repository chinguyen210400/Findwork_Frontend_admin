import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import TalentItems from "./TalentItems";
import ReactPaginate from "react-paginate";
import './Cards_talentdis.css';

function Cards_talentdis () {

    const [talentItem,setTalentItem] = useState([
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
    ])

    const [pageNumber, setPageNumber] = useState(0);

    const itemPerPage = 6;
    const pagesVisited = pageNumber * itemPerPage;

    const pageCount = Math.ceil(talentItem.length / itemPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const  talentsList = talentItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item,index) => {
                    return (
                        <TalentItems key={index} text1={item.text1} text2={item.text2}/>
                    );
                }
    )
   
    return (
        <div className = "talent_container">
        <div className = "talent_title">
                <h1>Discover</h1>
        </div>
        <div  className = 'talent_body'>
        <div class = "list_right">
        
        {talentsList}
        </div>

        <div className="talent_pagi">
        <ReactPaginate 
            previousLabel={<i class="fa fa-chevron-left" aria-hidden="true"></i>}
            nextLabel={<i class="fa fa-chevron-right" aria-hidden="true"></i>}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"talent_paginationBttns"}
            previousLinkClassName={"talent_previousBttn"}
            nextLinkClassName={"talent_nextBttn"}
            disabledClassName={"talent_paginationDisabled"}
            activeClassName={"talent_paginationActive"}
        /> 
        </div>
        </div>   
        </div>  
        
    );
}

export default Cards_talentdis;