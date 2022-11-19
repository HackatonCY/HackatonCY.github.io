import {Home} from "./pages/Home";
import {Scan, ScanResult} from "./pages/Scan";
import {Product} from "./pages/Product";
import { f7 } from 'framework7-react';

export default [
    {
        path: "/",
        component: Home,
        options: {
            props: {
                onScanClick() {
                    f7.views.main.router.navigate("/scan")
                },
                onProductClick(productId: string) {
                    f7.views.main.router.navigate(`/product/${productId}`);
                }
            }
        }
    },
    {
        path: "/scan",
        component: Scan,
        options: {
            props: {
                onScanned(scanResult: ScanResult) {
                    f7.views.main.router.navigate(`/product/${scanResult.productId}`);
                },
                onBackClick() {
                    f7.views.main.router.navigate(`/`);
                }
            }
        }
    },
    {
        path: "/product/:productId",
        component: Product,
        options: {
            props: {
                onBackClick() {
                    f7.views.main.router.navigate(`/`);
                }
            }
        }
    }
]
