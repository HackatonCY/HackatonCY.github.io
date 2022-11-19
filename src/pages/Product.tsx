import React from "react";
import {
    Block, BlockTitle,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    Col,
    Icon,
    Link, List, ListItem,
    Navbar,
    NavLeft,
    NavTitle,
    Page,
    Row
} from "framework7-react";

export interface ProductProps {
    productId: string

    onBackClick(): void
}

export const Product: React.FC<ProductProps> = (props: ProductProps) => {
    return (
        <Page>
            <Navbar>
                <NavLeft>
                    <Link iconIos={"f7:chevron_left"} onClick={props.onBackClick}>Back</Link>
                </NavLeft>
                <NavTitle>
                    {"Product X"}
                </NavTitle>
            </Navbar>
            <Card>
                <CardHeader>
                    <img width={"100%"} src={"./images/makaroni.png"}/>
                </CardHeader>
                <CardContent>
                    <Row>
                        <Col width={100}><Icon color={"green"} ios={"f7:checkmark_seal"} /> <span color={"green"}>Verified</span></Col>
                    </Row>
                    <Row>
                        <Col width={100}>
                            <Block inset strong>
                                The best makaroni made in Cyprus in the smallest village where only one old man keeps living.
                                The taste of the makaroni is like small Italy in the most smallest village. You must try this,
                                so you will start speaking italian.
                            </Block>
                        </Col>
                    </Row>
                </CardContent>
                <CardContent>
                    <Row>
                        <Col width={50}><b>Manufacturer:</b></Col>
                        <Col width={50} className={"flex-justify-content-end"}>
                            <Link href={"/"}>Andreas and sons</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col width={50}><b>Latest scanned at:</b></Col>
                        <Col width={50}>14.10.2022</Col>
                    </Row>
                    <Row>
                        <Col width={50}><b>Added to the system</b></Col>
                        <Col width={50}>14.10.2019</Col>
                    </Row>
                    <Row>
                        <Col width={50}><b>Lately updated at</b></Col>
                        <Col width={50}>14.10.2022</Col>
                    </Row>
                </CardContent>
                <CardFooter>
                    <Link iconIos={"f7:hand_thumbsup"}></Link>
                    <Link>Comment</Link>
                </CardFooter>
            </Card>

            <BlockTitle>Latest scans</BlockTitle>
            <List>
                <ListItem title="Limassol" link="#" after={"14.10.2022"}></ListItem>
                <ListItem title="Paphos" link="#" after={"12.10.2022"}></ListItem>
                <ListItem title="Paphos" link="#" after={"10.10.2022"}></ListItem>
            </List>
        </Page>
    )
}
