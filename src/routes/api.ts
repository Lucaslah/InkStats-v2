import {
    Router,
    Request,
    Response
} from "express";
import * as stats from "../stats";

const router = Router();

class APIRouter {
    constructor() {
        /* Home Page */
        router.get('/', (_req: Request, res: Response) => {
            res.send('Hello World');
        });
        /* Total Ram */
        router.get('/totalRam', (_req: Request, res: Response) => {
            res.json({
                totamRam: stats.totalRam
            });
        });
        /* Platform */
        router.get('/platform', (_req: Request, res: Response) => {
            res.json({
                platform: stats.platform
            });
        });
        /* CPU Model */
        router.get('/CPU_model', (_req: Request, res: Response) => {
            res.json({
                CPU_model: stats.CPU_model
            });
        });
        /* CPU Speed */
        router.get('/CPU_speed', (_req: Request, res: Response) => {
            res.json({
                CPU_speed: stats.CPU_speed
            })
        });
        /* CPU Cores */
        router.get('/CPU_cores', (_req: Request, res: Response) => {
            res.json({
                CPU_cores: stats.CPU_cores
            })
        });
        /* System Uptime */
        router.get('/sysUptime', (_req: Request, res: Response) => {
            res.json({
                sysUptime: stats.sysUptime
            })
        });
    }
}

new APIRouter();

export default router;