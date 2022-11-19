import React from "react";
import {RecentlyViewed} from "../components/RecentlyViewed";
import {Block, BlockTitle, Button, Navbar, Page} from "framework7-react";

export interface HomeProps {
    onScanClick(): void

    onProductClick(productId: string): void
}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
    return (
        <Page>
            <Navbar title={"Check a product"}></Navbar>

            <BlockTitle>
                Instructions
            </BlockTitle>

            <Block strong inset>
                <ol>
                    <li>Just find a QR code on the product shelf</li>
                    <li>click the button SCAN and direct your camera to the code</li>
                    <li>That wil be scanned and you will see all the information about the product</li>
                </ol>
            </Block>

            <Block>
                <Button
                    onClick={(ev) => props.onScanClick()}
                    iconIos={"f7:qrcode_viewfinder"} large outline
                >
                    SCAN
                </Button>
            </Block>

            <BlockTitle>
                Recently scanned products
            </BlockTitle>

            <RecentlyViewed
                onProductClick={props.onProductClick}
                items={[
                    {imgSrc: "./images/halumi1.png", title: "Super Halumi", productId: "a"},
                    {imgSrc: "./images/halumi2.png", title: "One more Halumi", productId: "b"},
                    {imgSrc: "./images/makaroni.png", title: "Makaroni", productId: "c"},
                ]}/>
        </Page>
    );
}

