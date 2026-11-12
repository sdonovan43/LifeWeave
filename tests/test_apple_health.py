"""
Tests for Apple Health Data Collection Module
"""

import unittest
import os
import sys

# Add the src directory to the path so we can import our modules
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from data_collection.apple_health import AppleHealthDataCollector

class TestAppleHealthDataCollector(unittest.TestCase):
    """Test cases for AppleHealthDataCollector"""
    
    def setUp(self):
        """Set up test fixtures before each test method."""
        self.collector = AppleHealthDataCollector({
            'user_id': 'test_user_123'
        })
    
    def test_init(self):
        """Test that the collector initializes correctly"""
        self.assertIsNotNone(self.collector)
        self.assertEqual(self.collector.user_id, 'test_user_123')
        
    def test_is_connected(self):
        """Test connection check functionality"""
        connected = self.collector.is_connected()
        self.assertTrue(connected)
    
    def test_data_types(self):
        """Test that data types are properly defined"""
        expected_types = [
            'heart_rate',
            'steps', 
            'sleep_analysis',
            'heart_rate_variability',
            'active_energy_burned',
            'resting_energy_burned',
            'distance_walking_running',
            'vo2_max',
            'blood_pressure_systolic',
            'blood_pressure_diastolic',
            'oxygen_saturation',
            'temperature',
            'respiratory_rate'
        ]
        
        self.assertEqual(len(self.collector.data_types), len(expected_types))
        for data_type in expected_types:
            self.assertIn(data_type, self.collector.data_types)
    
    def test_get_recent_data_heart_rate(self):
        """Test getting recent heart rate data"""
        data = self.collector.get_recent_data('heart_rate', 3)
        self.assertIsInstance(data, list)
        if len(data) > 0:
            self.assertIn('heart_rate_bpm', data[0])
            self.assertIn('date', data[0])
            self.assertIn('source', data[0])
    
    def test_get_recent_data_steps(self):
        """Test getting recent steps data"""
        data = self.collector.get_recent_data('steps', 3)
        self.assertIsInstance(data, list)
        if len(data) > 0:
            self.assertIn('steps', data[0])
            self.assertIn('date', data[0])
            self.assertIn('source', data[0])
    
    def test_get_recent_data_sleep(self):
        """Test getting recent sleep data"""
        data = self.collector.get_recent_data('sleep_analysis', 3)
        self.assertIsInstance(data, list)
        if len(data) > 0:
            self.assertIn('sleep_hours', data[0])
            self.assertIn('sleep_quality', data[0])
            self.assertIn('date', data[0])
    
    def test_get_all_data(self):
        """Test getting all health data"""
        all_data = self.collector.get_all_data(3)
        self.assertIsInstance(all_data, dict)
        self.assertIn('user_id', all_data)
        self.assertIn('collected_date', all_data)
        self.assertIn('data', all_data)
        
    def test_save_to_file(self):
        """Test saving data to file"""
        # Create some test data
        test_data = {
            'user_id': 'test_user_123',
            'collected_date': '2023-01-01T00:00:00',
            'data': {
                'heart_rate': [{'date': '2023-01-01', 'heart_rate_bpm': 70}]
            }
        }
        
        # Test saving
        filepath = self.collector.save_to_file(test_data, 'test_apple_health_data.json')
        self.assertTrue(filepath != "")
        
        # Clean up test file
        if os.path.exists(filepath):
            os.remove(filepath)

if __name__ == '__main__':
    unittest.main()