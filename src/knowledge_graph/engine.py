"""
Knowledge Graph Engine Module
This module handles the core knowledge graph operations for LifeWeave
"""

from typing import Dict, List, Any
import json

class KnowledgeGraphEngine:
    """Class for managing the semantic health knowledge graph"""
    
    def __init__(self):
        self.graph = {
            'nodes': [],
            'edges': [],
            'metadata': {
                'created_at': None,
                'version': '1.0'
            }
        }
        print("Knowledge Graph Engine initialized")
    
    def add_data_to_graph(self, data: Dict) -> None:
        """Add health data to the knowledge graph"""
        print(f"Adding {len(data.get('data', {}))} data types to knowledge graph")
        
        # In a real implementation, this would create proper nodes and edges
        # For now, we'll just add some basic structure
        
        # Add user node
        user_node = {
            'id': f"user_{data.get('user_id', 'unknown')}",
            'type': 'user',
            'properties': {
                'user_id': data.get('user_id', 'unknown'),
                'collected_at': data.get('collected_date', None)
            }
        }
        
        self.graph['nodes'].append(user_node)
        
        # Add sample health nodes for each data type
        for data_type, data_points in data.get('data', {}).items():
            if data_points:
                # Create a node for this data type
                data_node = {
                    'id': f"data_{data_type}",
                    'type': 'health_data',
                    'properties': {
                        'data_type': data_type,
                        'count': len(data_points),
                        'source': 'apple_health'
                    }
                }
                
                self.graph['nodes'].append(data_node)
                
                # Create edges between user and data
                edge = {
                    'id': f"edge_{len(self.graph['edges']) + 1}",
                    'from': user_node['id'],
                    'to': data_node['id'],
                    'relationship': 'has_data'
                }
                
                self.graph['edges'].append(edge)
        
        print("✓ Data added to knowledge graph successfully")
    
    def create_node(self, node_type: str, properties: Dict) -> str:
        """Create a new node in the knowledge graph"""
        node_id = f"{node_type}_{len(self.graph['nodes']) + 1}"
        
        node = {
            'id': node_id,
            'type': node_type,
            'properties': properties
        }
        
        self.graph['nodes'].append(node)
        return node_id
    
    def create_edge(self, from_node: str, to_node: str, relationship: str) -> None:
        """Create an edge between two nodes"""
        edge = {
            'id': f"edge_{len(self.graph['edges']) + 1}",
            'from': from_node,
            'to': to_node,
            'relationship': relationship
        }
        
        self.graph['edges'].append(edge)
    
    def get_nodes_by_type(self, node_type: str) -> List[Dict]:
        """Get all nodes of a specific type"""
        return [node for node in self.graph['nodes'] if node['type'] == node_type]
    
    def get_edges_by_relationship(self, relationship: str) -> List[Dict]:
        """Get all edges with a specific relationship"""
        return [edge for edge in self.graph['edges'] if edge['relationship'] == relationship]
    
    def export_graph(self, filename: str = None) -> str:
        """Export the knowledge graph to JSON file"""
        if not filename:
            filename = 'knowledge_graph.json'
        
        try:
            with open(filename, 'w') as f:
                json.dump(self.graph, f, indent=2)
            print(f"Knowledge graph exported to {filename}")
            return filename
        except Exception as e:
            print(f"Error exporting knowledge graph: {e}")
            return ""
    
    def get_graph_summary(self) -> Dict[str, Any]:
        """Get a summary of the knowledge graph"""
        return {
            'node_count': len(self.graph['nodes']),
            'edge_count': len(self.graph['edges']),
            'node_types': list(set(node['type'] for node in self.graph['nodes'])),
            'data_types': [node['properties'].get('data_type') 
                          for node in self.graph['nodes'] 
                          if node['type'] == 'health_data']
        }

# Example usage function
def demo_knowledge_graph():
    """Demonstrate how the knowledge graph engine works"""
    print("=== Knowledge Graph Engine Demo ===")
    
    # Initialize engine
    kg_engine = KnowledgeGraphEngine()
    
    # Create some sample data
    sample_data = {
        'user_id': 'user_12345',
        'collected_date': '2023-10-05T10:00:00',
        'data': {
            'heart_rate': [{'date': '2023-10-05', 'heart_rate_bpm': 72}],
            'steps': [{'date': '2023-10-05', 'steps': 8500}]
        }
    }
    
    # Add data to graph
    kg_engine.add_data_to_graph(sample_data)
    
    # Get summary
    summary = kg_engine.get_graph_summary()
    print(f"Graph Summary: {summary}")
    
    # Export graph
    kg_engine.export_graph('demo_knowledge_graph.json')
    
    print("✓ Knowledge graph demo completed successfully")

if __name__ == "__main__":
    demo_knowledge_graph()