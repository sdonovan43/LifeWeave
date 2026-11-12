"""
Test to verify project structure and basic functionality
"""

import os
import sys

def test_project_structure():
    """Test that all required directories and files exist"""
    
    # Test directories
    required_dirs = [
        'data/dummy',
        'data/personal', 
        'src/data_collection',
        'src/knowledge_graph',
        'src/reasoning',
        'src/ui'
    ]
    
    for dir_path in required_dirs:
        assert os.path.exists(dir_path), f"Directory {dir_path} does not exist"
    
    # Test files
    required_files = [
        'README.md',
        '.gitignore',
        'config/settings.json',
        'requirements.txt',
        'src/main.py'
    ]
    
    for file_path in required_files:
        assert os.path.exists(file_path), f"File {file_path} does not exist"
    
    print("✓ All project structure tests passed!")

def test_module_imports():
    """Test that all modules can be imported"""
    
    try:
        from src.data_collection.wearable_api import WearableAPI
        from src.data_collection.manual_input import ManualInput
        from src.knowledge_graph.graph_engine import GraphEngine
        from src.knowledge_graph.ontology import HealthOntology
        from src.reasoning.ai_reasoner import AIReasoner
        from src.ui.interface import HealthInterface
        
        print("✓ All module imports successful!")
        
    except ImportError as e:
        print(f"✗ Import error: {e}")
        raise

if __name__ == "__main__":
    test_project_structure()
    test_module_imports()
    print("All tests passed! Project structure is ready.")