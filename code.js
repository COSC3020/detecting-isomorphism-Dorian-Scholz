function are_isomorphic(graph1, graph2) 
{
    
    const getDegreeSequence = (graph) => 
    {
        return graph.map(neighbors => neighbors.length).sort((a, b) => a - b);
    };

    
    if (graph1.length !== graph2.length) 
    {
        return false;
    }

    
    const edges1 = graph1.flat().length / 2;
    const edges2 = graph2.flat().length / 2;
    if (edges1 !== edges2) 
    {
        return false;
    }

  
    const degreeSeq1 = getDegreeSequence(graph1);
    const degreeSeq2 = getDegreeSequence(graph2);
    if (degreeSeq1.join() !== degreeSeq2.join()) 
    {
        return false;
    }

   
    const n = graph1.length;
    const vertices = [...Array(n).keys()];

    const isMappingValid = (mapping) => 
    {
        for (let i = 0; i < n; i++)
        {
            for (let j = 0; j < n; j++) 
            {
                if (graph1[i][j] !== graph2[mapping[i]][mapping[j]]) 
                {
                    return false;
                }
            }
        }
        return true;
    };

    const permute = (arr, used = [], result = []) => 
    {
        if (arr.length === result.length) 
        {
            return isMappingValid(result) ? true : false;
        }
        for (let i = 0; i < arr.length; i++) 
        {
            if (!used[i]) 
            {
                used[i] = true;
                result.push(arr[i]);
                if (permute(arr, used, result)) return true;
                result.pop();
                used[i] = false;
            }
        }
        return false;
    };

    return permute(vertices);
}
