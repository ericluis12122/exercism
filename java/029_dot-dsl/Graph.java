import java.util.Collection;
import java.util.Collections;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;

public class Graph {
    private Map<String, String> attributes;
    private ArrayList<Node> nodes;
    private ArrayList<Edge> edges;
    
    public Graph() {
        this(Collections.emptyMap());
    }

    public Graph(Map<String, String> attributes) {
        this.attributes = Map.copyOf(attributes);
        this.nodes = new ArrayList<Node>();
        this.edges = new ArrayList<Edge>();
    }

    Graph(Graph other) {
        this.attributes = new HashMap<String, String>(other.attributes);
        this.nodes = new ArrayList<Node>(other.nodes);
        this.edges = new ArrayList<Edge>(other.edges);
    }

    public Collection<Node> getNodes() {
        return new ArrayList<Node>(this.nodes);
    }

    public Collection<Edge> getEdges() {
        return new ArrayList<Edge>(this.edges);
    }

    public Graph node(String name) {
        this.nodes.add(new Node(name));
        return new Graph(this);
    }

    public Graph node(String name, Map<String, String> attributes) {
        this.nodes.add(new Node(name, attributes));
        return new Graph(this);
    }

    public Graph edge(String start, String end) {
        this.edges.add(new Edge(start, end));
        return new Graph(this);
    }

    public Graph edge(String start, String end, Map<String, String> attributes) {
        this.edges.add(new Edge(start, end, attributes));
        return new Graph(this);
    }

    public Map<String, String> getAttributes() {
        return new HashMap<String, String>(this.attributes);
    }
}
