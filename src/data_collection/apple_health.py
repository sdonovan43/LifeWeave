"""
Apple Health Data Collection Module
This module handles integration with Apple Health and Apple Watch data
"""

import json
import os
from datetime import datetime, timedelta
from typing import Dict, List, Optional

class AppleHealthDataCollector:
    """Class for collecting health data from Apple Health and Apple Watch"""
    
    def __init__(self, config: Dict = None):
        self.config = config or {}
        self.user_id = self.config.get('user_id', 'default_user')
        print("Apple Health data collector initialized")
        
        # Apple Health data types we can collect
        self.data_types = [
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
    
    def is_connected(self) -> bool:
        """Check if Apple Health is accessible"""
        # In a real implementation, this would check actual connection
        print("Checking Apple Health connection...")
        return True  # For testing purposes
    
    def get_recent_data(self, data_type: str, days: int = 7) -> List[Dict]:
        """Get recent data for a specific health metric"""
        print(f"Retrieving {data_type} data for last {days} days")
        
        # This would normally connect to Apple Health API
        # For now, we'll return dummy data that mimics real Apple Health data
        
        if data_type == 'heart_rate':
            return self._generate_heart_rate_data(days)
        elif data_type == 'steps':
            return self._generate_steps_data(days)
        elif data_type == 'sleep_analysis':
            return self._generate_sleep_data(days)
        elif data_type == 'heart_rate_variability':
            return self._generate_hrv_data(days)
        else:
            # Return empty list for unsupported types
            return []
    
    def _generate_heart_rate_data(self, days: int) -> List[Dict]:
        """Generate dummy heart rate data"""
        data = []
        end_date = datetime.now()
        
        for i in range(days):
            date = (end_date - timedelta(days=i)).strftime('%Y-%m-%d')
            
            # Generate multiple readings per day
            for j in range(5):  # 5 readings per day
                data.append({
                    'date': date,
                    'time': f"{j*6}:00",
                    'heart_rate_bpm': 60 + (i % 10) * 2 + j,  # Varying heart rates
                    'source': 'Apple Watch',
                    'unit': 'bpm'
                })
        
        return data
    
    def _generate_steps_data(self, days: int) -> List[Dict]:
        """Generate dummy steps data"""
        data = []
        end_date = datetime.now()
        
        for i in range(days):
            date = (end_date - timedelta(days=i)).strftime('%Y-%m-%d')
            
            # Generate daily step count
            steps = 5000 + (i * 1000) + (i % 5) * 500
            
            data.append({
                'date': date,
                'steps': steps,
                'source': 'Apple Watch',
                'unit': 'steps'
            })
        
        return data
    
    def _generate_sleep_data(self, days: int) -> List[Dict]:
        """Generate dummy sleep data"""
        data = []
        end_date = datetime.now()
        
        for i in range(days):
            date = (end_date - timedelta(days=i)).strftime('%Y-%m-%d')
            
            # Generate sleep duration and quality
            sleep_hours = 6.5 + (i % 3) * 0.5
            sleep_quality = 70 + (i % 4) * 5  # Percentage
            
            data.append({
                'date': date,
                'sleep_hours': sleep_hours,
                'sleep_quality': sleep_quality,
                'source': 'Apple Watch',
                'unit': 'hours'
            })
        
        return data
    
    def _generate_hrv_data(self, days: int) -> List[Dict]:
        """Generate dummy heart rate variability data"""
        data = []
        end_date = datetime.now()
        
        for i in range(days):
            date = (end_date - timedelta(days=i)).strftime('%Y-%m-%d')
            
            # Generate HRV values
            hrv_ms = 60 + (i % 10) * 3
            
            data.append({
                'date': date,
                'hrv_ms': hrv_ms,
                'source': 'Apple Watch',
                'unit': 'ms'
            })
        
        return data
    
    def get_all_data(self, days: int = 7) -> Dict:
        """Get all available health data for specified period"""
        print(f"Collecting all health data for last {days} days")
        
        all_data = {
            'user_id': self.user_id,
            'collected_date': datetime.now().isoformat(),
            'data': {}
        }
        
        # Collect data for each data type
        for data_type in self.data_types:
            try:
                if data_type == 'heart_rate':
                    data = self._generate_heart_rate_data(days)
                elif data_type == 'steps':
                    data = self._generate_steps_data(days)
                elif data_type == 'sleep_analysis':
                    data = self._generate_sleep_data(days)
                elif data_type == 'heart_rate_variability':
                    data = self._generate_hrv_data(days)
                else:
                    # For other data types, return empty list (would be implemented in real version)
                    data = []
                
                if data:
                    all_data['data'][data_type] = data
            except Exception as e:
                print(f"Error collecting {data_type}: {e}")
        
        return all_data
    
    def save_to_file(self, data: Dict, filename: str = None) -> str:
        """Save collected data to JSON file"""
        if not filename:
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            filename = f"apple_health_data_{timestamp}.json"
        
        filepath = os.path.join('data/personal', filename)
        
        try:
            with open(filepath, 'w') as f:
                json.dump(data, f, indent=2)
            print(f"Data saved to {filepath}")
            return filepath
        except Exception as e:
            print(f"Error saving data: {e}")
            return ""
    
    def sync_with_personal_data(self):
        """Sync collected data with personal health data"""
        print("Syncing with personal health data...")
        # This would merge Apple Health data with user's personal data
        pass

# Example usage function
def demo_apple_health_collection():
    """Demonstrate how Apple Health collection would work"""
    print("=== Apple Health Data Collection Demo ===")
    
    # Initialize collector
    collector = AppleHealthDataCollector({
        'user_id': 'user_12345'
    })
    
    # Check connection
    connected = collector.is_connected()
    print(f"Connected to Apple Health: {connected}")
    
    # Get sample data
    heart_rate_data = collector.get_recent_data('heart_rate', 3)
    steps_data = collector.get_recent_data('steps', 3)
    
    print(f"Retrieved {len(heart_rate_data)} heart rate readings")
    print(f"Retrieved {len(steps_data)} step counts")
    
    # Get all data
    all_data = collector.get_all_data(3)
    print(f"Collected data for {len(all_data['data'])} health metrics")
    
    # Save to file
    filepath = collector.save_to_file(all_data, 'demo_apple_health_data.json')
    print(f"Data saved to: {filepath}")

if __name__ == "__main__":
    demo_apple_health_collection()