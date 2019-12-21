import { NextApiRequest, NextApiResponse } from 'next';
declare type Handler<T> = (req: NextApiRequest, res: NextApiResponse<T>) => void | Promise<void>;
declare const _default: <T>(verbs: {
    [verb: string]: Handler<T>;
}) => Handler<T>;
export default _default;
