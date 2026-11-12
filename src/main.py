"""
LifeWeave - Personal Semantic Health Knowledge Graph System
"""

import sys
import os

# Add the src directory to the path so we can import our modules
sys.path.insert(0, os.path.dirname(__file__))

from data_collection.apple_health import AppleHealthDataCollector
from knowledge_graph.engine import KnowledgeGraphEngine
from reasoning.ai_reasoning import AIReasoningEngine

def main():
    """Main entry point for the LifeWeave system"""
    print("=== LifeWeave - Personal Semantic Health Knowledge Graph System ===")
    
    # Initialize components
    print("\n1. Initializing system components...")
    
    # Apple Health data collector
    apple_collector = AppleHealthDataCollector({
        'user_id': 'user_12345'
    })
    
    # Knowledge graph engine
    kg_engine = KnowledgeGraphEngine()
    
    # AI reasoning engine
    ai_reasoning = AIReasoningEngine()
    
    print("✓ System components initialized successfully")
    
    # Demonstrate Apple Health data collection
    print("\n2. Collecting health data from Apple Health...")
    
    # Check connection
    connected = apple_collector.is_connected()
    print(f"Apple Health connection: {'Connected' if connected else 'Disconnected'}")
    
    # Get sample data
    heart_rate_data = apple_collector.get_recent_data('heart_rate', 3)
    steps_data = apple_collector.get_recent_data('steps', 3)
    
    print(f"Retrieved {len(heart_rate_data)} heart rate readings")
    print(f"Retrieved {len(steps_data)} step counts")
    
    # Get all data
    all_data = apple_collector.get_all_data(3)
    print(f"Collected data for {len(all_data['data'])} health metrics")
    
    # Save to file
    filepath = apple_collector.save_to_file(all_data, 'demo_apple_health_data.json')
    print(f"Data saved to: {filepath}")
    
    # Demonstrate knowledge graph integration
    print("\n3. Building knowledge graph...")
    
    # Add collected data to knowledge graph
    kg_engine.add_data_to_graph(all_data)
    print("✓ Data added to knowledge graph")
    
    # Demonstrate AI reasoning
    print("\n4. Generating recommendations with AI reasoning...")
    
    # Generate recommendations based on the collected data
    recommendations = ai_reasoning.generate_recommendations(kg_engine.graph)
    print(f"Generated {len(recommendations)} recommendations")
    
    # Display sample recommendations
    for i, rec in enumerate(recommendations[:3], 1):
        print(f"  {i}. {rec}")
    
    print("\n=== System execution completed successfully ===")

if __name__ == "__main__":
    main()