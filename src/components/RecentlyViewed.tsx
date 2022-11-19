import React, {useState} from "react";
import {Card, CardContent, CardFooter, Link, Swiper, SwiperSlide} from "framework7-react";
import "swiper/swiper-bundle.css";

export interface RecentlyViewedItem {
    productId: string
    imgSrc: string
    title: string
}

export interface RecentlyViewedProps {
    items: RecentlyViewedItem[]
    onProductClick(productId: string):void
}

export const RecentlyViewed: React.FC<RecentlyViewedProps> = (props: RecentlyViewedProps) => {

    const [index, setIndex] = useState(0);

    const handleSwipe = (activeIndex: number) => {
        setIndex(activeIndex)
    }

    return (
        <Swiper pagination slidesPerView={2} autoHeight>
            {props.items.map((i: RecentlyViewedItem) => {
                return (
                    <SwiperSlide key={i.imgSrc}>
                        <Card>
                            <CardContent>
                                <Link onClick={e => props.onProductClick(i.productId)}>
                                    <img style={{width: "100%", height: "100%"}} src={i.imgSrc}/>
                                </Link>
                            </CardContent>
                            <CardFooter>
                                <h4 style={{textAlign: "center"}}>{i.title}</h4>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

