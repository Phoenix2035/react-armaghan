import React, {useEffect} from 'react';
import {homeCategories, homeSliderItem} from "../redux/reducers/slider/slider.thunk";
import {connect, useSelector} from "react-redux";
import CardSlider from "./CardSlider";


function SliderHorizontal({homeSliderItem, homeCategories}) {
    // const [order, setOrder] = useState({
    //     order: 1
    // })


    const categories = useSelector(state => state.category.categories)
    const sliderItems = useSelector(state => state.category.sliderItems)


    const categoryData = categories.data

    useEffect(() => {
        for (const i in categoryData) {
            i > 0 && homeSliderItem(categoryData[i].id, categoryData[i].value)
        }
    }, [categories])

    useEffect(() => {
        homeCategories()
    }, [])

    // function fetch() {
    //     if (categories && categories[order]) {
    //         homeSliderItem(categories[order].id, categories[order].value)
    //             .then(() => setOrder({order: order + 1}))
    //         // homeSliderItem(categories.data[0].id)
    //     }
    // }

    // useEffect(() => {
    //     // if (this.props.categories && this.props.categories[this.state.order]) {
    //     //     this.props.getHomeMoreCategoriesSlides(this.props.categories[this.state.order].id,
    //     //         this.props.categories[this.state.order].value, this.props.categories[this.state.order].type)
    //     //         .then(() => this.setState({order: this.state.order + 1}))
    //     // }
    //     fetch()
    // }, [])

    return (
        <>
            {/*<div> {  sliderItems.map((items) =><div className={'mx-1'}>{items.name}</div>)}</div>*/}
            {/*{*/}

            {/*    <div className='home-slider'>*/}
            {/*        {*/}
            {/*            categories.data ?*/}
            {/*                categories.data.map(item => (*/}
            {/*                        <p className='home-slider-category' key={item.id}>{item.value}</p>*/}
            {/*                    )*/}
            {/*                ) : null*/}
            {/*        }*/}

            {/*    </div>*/}
            {/*}*/}

            <>
                {/*{console.log('sliderItems', sliderItems.map(item=>item.data.map(item=>item.id)))}*/}
                {
                    sliderItems ?

                        sliderItems.map((items, index) =>
                            <React.Fragment key={index}>
                                {/*{console.log('items', items.id)}*/}
                                {/*{console.log('index', index)}*/}
                                <CardSlider
                                    data={items.data}
                                    name={items.name}
                                />
                            </React.Fragment>
                        )
                        : null
                }
            </>

            {/*<div>*/}
            {/*    {*/}
            {/*        horizontalSlidersItems ?*/}
            {/*            horizontalSlidersItems.map((items, i) =>*/}
            {/*                <React.Suspense key={i} fallback={<div className='p-4'>loading ...</div>}>*/}
            {/*                    <HorizontalSlider*/}
            {/*                        item={items.data}*/}
            {/*                        name={items.name}*/}
            {/*                        id={items.id}*/}
            {/*                        i={i}*/}
            {/*                        type={items.type}*/}
            {/*                        series={items.type.includes('SERIAL')}*/}
            {/*                    />*/}
            {/*                </React.Suspense>*/}
            {/*            ) : null*/}
            {/*    }*/}
            {/*   */}
            {/*</div>*/}


        </>
    )
}

export default connect(null, {homeSliderItem, homeCategories})(SliderHorizontal);