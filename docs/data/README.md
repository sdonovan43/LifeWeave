# Health Data Samples for LifeWeave

This directory contains sample health data files and schema definitions for the LifeWeave personal semantic health knowledge graph system.

## Files

- `sample_health_data.json` - Example health data with all tiers of information
- `health_data_schema.json` - Original schema definition for the health data model
- `enhanced_schema.json` - Enhanced schema with semantic reasoning capabilities
- `enhanced_sample_data.json` - Sample data demonstrating enhanced schema features

## Data Structure Overview

The health data follows a layered approach, but now emphasizes semantic relationships and causal reasoning:

### Tier 1: Core Vital Metrics
- Age, Sex, Height, Weight, BMI
- Resting Heart Rate, Blood Pressure
- Body Fat %, Waist Circumference

### Tier 2: Sleep Metrics
- Sleep Duration, Sleep Efficiency
- Sleep Latency, Wake After Sleep Onset
- REM Sleep, Deep Sleep
- Sleep Consistency, Sleep Quality

### Tier 3: Activity Metrics
- Daily Steps, Active Minutes
- Exercise Sessions, Distance Walked
- Stair Flights, Sedentary Time
- VO2 Max, Cardio Fitness Score

### Tier 4: Recovery Metrics
- Heart Rate Variability (HRV)
- Resting Heart Rate Trend
- Recovery Score, Respiratory Rate
- Body Temperature Deviation

### Tier 5: Metabolic Health
- Fasting Glucose, A1C, Insulin
- Triglycerides, HDL, LDL, Total Cholesterol
- Blood Sugar Variability

### Tier 6: Symptoms
- Symptom tracking with severity, duration, location, trigger, relief factors

### Tier 7: Interventions
- Track health actions taken and their effectiveness

### Tier 8: Context
- Environmental and lifestyle factors affecting health
- Stress Level, Mood, Weather, Travel, Alcohol, Caffeine, Workload, Social Activity, Diet Changes

## Enhanced Schema Features

The enhanced schema introduces semantic reasoning capabilities:

### Entities
- **person**: User profile and demographics
- **metric**: Quantitative health measurements with timestamps
- **symptom**: Personal health symptoms with detailed tracking
- **intervention**: Health actions taken and their effectiveness
- **context**: Environmental and lifestyle factors affecting health
- **belief**: Semantic beliefs with confidence levels and supporting evidence
- **temporal_pattern**: Temporal relationships and patterns in health data
- **hypothesis**: Causal hypotheses with supporting evidence
- **narrative_element**: Elements for building health narratives

### Relationships
- Symptom to Metric: Symptom is associated with specific health metrics
- Intervention to Outcome: Intervention leads to specific outcomes
- Context to Symptom: Context factors influence symptom occurrence
- Metric to Intervention: Health metrics guide intervention decisions
- Belief to Evidence: Belief supported by observations
- Temporal Cause Effect: Temporal causal relationships between events

### Categories
- **symptom**: neck_tension, headache, fatigue, joint_pain, digestive_issue, mood_change
- **intervention**: massage, mfr, meditation, exercise, dietary_change, sleep_extension, stress_management
- **context_factor**: stress_level, mood, workload, caffeine_intake, alcohol_consumption, weather, travel
- **belief_category**: sleep_quality, stress_management, intervention_effectiveness, temporal_patterns

## Usage

The sample data can be used to:

1. Demonstrate the enhanced system functionality with semantic reasoning
2. Test the knowledge graph construction with causal relationships
3. Validate AI reasoning capabilities for "what does this mean?" questions
4. Develop web UI visualizations that show causal patterns and beliefs
5. Build narrative generation systems for continuous health storytelling

The enhanced schema focuses on answering "what does this mean?" rather than just "what is this?", enabling:
- Causal hypothesis generation
- Temporal pattern recognition
- Belief confidence scoring
- Personalized intervention effectiveness tracking
- Narrative-based health story writing