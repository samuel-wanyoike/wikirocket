type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        Source: string,
        width: number,
        height: number,
    }

}

type SearchResult = {
    query?:{
        pages?: Result[],
    },
}