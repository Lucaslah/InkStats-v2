declare const sections: ({
    header: string;
    content: string;
    optionList?: undefined;
} | {
    header: string;
    content: string[];
    optionList?: undefined;
} | {
    header: string;
    optionList: {
        name: string;
        description: string;
        type: BooleanConstructor;
    }[];
    content?: undefined;
} | {
    header: string;
    content: {
        desc: string;
        example: string;
    }[];
    optionList?: undefined;
} | {
    content: string;
    header?: undefined;
    optionList?: undefined;
})[];
export default sections;
