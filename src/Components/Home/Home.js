import React from 'react';
import AddReview from '../AddReview/AddReview';
import Banner from '../Banner/Banner';
import ExtraSection1 from '../ExtraSection1/ExtraSection1';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';
import Services from '../Services/Services';

const Home = () => {
    return (

            // home section data 

        <div>
            <Banner></Banner>
            <ExtraSection1></ExtraSection1>
            <Services></Services>
            <ExtraSection2></ExtraSection2>
            <AddReview></AddReview>
        </div>
    );
};

export default Home;