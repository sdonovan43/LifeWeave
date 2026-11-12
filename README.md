# LifeWeave - Personal Semantic Health Knowledge Graph System

LifeWeave is an innovative personal health management system that integrates Apple Health data with semantic knowledge graphs and AI reasoning to provide personalized health insights and recommendations.

## Overview

LifeWeave transforms raw health data from Apple Health into a structured semantic knowledge graph, enabling intelligent analysis and personalized recommendations through AI-powered reasoning. The system collects, processes, and analyzes health metrics to create actionable insights for users.

## Features

### Core Components

1. **Apple Health Data Collection**
   - Collects heart rate data
   - Retrieves step counts
   - Processes sleep analysis
   - Gathers heart rate variability (HRV) data
   - Simulated Apple Health integration

2. **Knowledge Graph Engine**
   - Semantic representation of health data
   - Node and edge creation for health metrics
   - Data integration from multiple sources
   - Graph export functionality

3. **AI Reasoning Engine**
   - AI-powered health recommendations
   - Pattern analysis across health metrics
   - Personalized insights generation
   - Template-based recommendation system

### System Workflow

1. Initialize all system components
2. Collect health data from Apple Health (simulated)
3. Process and store data in knowledge graph
4. Generate AI-powered recommendations based on the collected data
5. Display results and save data to files

## Project Structure

```
LifeWeave/
├── src/
│   ├── data_collection/
│   │   └── apple_health.py          # Apple Health data collector
│   ├── knowledge_graph/
│   │   └── engine.py                # Knowledge graph engine
│   ├── reasoning/
│   │   └── ai_reasoning.py          # AI reasoning engine
│   └── main.py                      # Main system orchestration
├── data/
│   └── personal/                    # Generated health data files
├── tests/                           # Unit tests
├── config/                          # Configuration files
├── requirements.txt                 # Python dependencies
└── README.md                        # This file
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LifeWeave
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the system:
```bash
python src/main.py
```

## Usage

The main script demonstrates a complete workflow:

1. **Initialization**: All system components are initialized
2. **Data Collection**: Simulated Apple Health data collection for heart rate, steps, sleep, and HRV
3. **Knowledge Graph Construction**: Health data is processed and stored in a semantic knowledge graph
4. **AI Reasoning**: AI engine generates personalized recommendations based on the health data
5. **Output**: Results are displayed and saved to JSON files

## Sample Output

When executed, the system will display:
- System initialization status
- Data collection progress
- Knowledge graph building results
- AI-generated recommendations based on health metrics

Example recommendations:
- "To improve your heart_rate, try meditation."
- "We noticed a pattern in your steps - your routine is working well."
- "To improve your sleep_analysis, try increase hydration."

## Testing

The project includes comprehensive unit tests:

```bash
# Run all tests
pytest tests/

# Run specific test modules
pytest tests/test_apple_health.py
pytest tests/test_structure.py
```

All tests pass with:
- 8/8 tests for Apple Health module
- 2/2 structure tests

## Data Files

The system generates demo data files in `data/personal/`:
- `demo_apple_health_data.json`: Sample health data collected from Apple Health

## Future Enhancements

- Integration with actual Apple Health API
- Expanded health metric support
- Advanced AI reasoning capabilities
- Web-based visualization of knowledge graphs
- Mobile application interface

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests for improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
