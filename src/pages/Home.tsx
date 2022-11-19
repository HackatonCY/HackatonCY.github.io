import React from "react";
import {RecentlyViewed} from "../components/RecentlyViewed";
import {Block, BlockTitle, Button, Col, Page, Row} from "framework7-react";
import {Router} from "framework7/framework7-types";

export interface HomeProps {
    onScanClick(): void

    onProductClick(productId: string):void
}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
    return (
        <Page>
            <Row className={"display-flex justify-content-center"} style={{height: "45%"}}>
                <Col width={100}>
                    <BlockTitle large>Check a product</BlockTitle>
                </Col>
                <Col width={100}>
                    <Block strong inset>
                        <ol>
                            <li>Just find a QR code on the product shelf</li>
                            <li>click the button SCAN and direct your camera to the code</li>
                            <li>That wil be scanned and you will see all the information about the product</li>
                        </ol>
                    </Block>
                </Col>
            </Row>
            <Row className={"display-flex justify-content-center align-content-center"} style={{height: "20%"}}>
                <Col width={50}>
                    <Button
                        onClick={(ev) => props.onScanClick()}
                        iconIos={"f7:qrcode_viewfinder"} large outline>
                        SCAN
                    </Button>
                </Col>
            </Row>
            <Row className={"display-flex align-content-flex-end"} resizable style={{height: "35%"}}>
                <Col width={100}>
                    <BlockTitle>
                        Recently scanned products
                    </BlockTitle>
                </Col>
                <Col width={100}>
                    <RecentlyViewed
                        onProductClick={props.onProductClick}
                        items={[
                        {imgSrc: "./images/halumi1.png", title: "Super Halumi", productId: "a"},
                        {imgSrc: "./images/halumi2.png", title: "One more Halumi", productId: "b"},
                        {imgSrc: "./images/makaroni.png", title: "Makaroni", productId: "c"},
                    ]}/>
                </Col>
            </Row>
        </Page>
    );
}

