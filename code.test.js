const are_isomorphic = require('./are_isomorphic'); 

describe('are_isomorphic', () => {
    it('returns true for identical graphs', () => 
    {
        const graph1 = [[1, 2], [0, 2], [0, 1]];
        const graph2 = [[1, 2], [0, 2], [0, 1]];
        expect(are_isomorphic(graph1, graph2)).toBe(true);
    });

    it('returns false for graphs with different structures', () => 
    {
        const graph1 = [[1, 2], [0], [0]];
        const graph2 = [[1], [0, 2], [1]];
        expect(are_isomorphic(graph1, graph2)).toBe(false);
    });

    it('returns true for isomorphic graphs with different adjacency order', () =>
    {
        const graph1 = [[1, 2], [0, 2], [0, 1]];
        const graph2 = [[1, 2], [2, 0], [1, 0]];
        expect(are_isomorphic(graph1, graph2)).toBe(true);
    });

    it('returns false for graphs with different numbers of vertices', () => 
    {
        const graph1 = [[1, 2], [0, 2], [0, 1]];
        const graph2 = [[1], [0]];
        expect(are_isomorphic(graph1, graph2)).toBe(false);
    });

    it('returns true for empty graphs', () => 
    {
        const graph1 = [];
        const graph2 = [];
        expect(are_isomorphic(graph1, graph2)).toBe(true);
    });
});
