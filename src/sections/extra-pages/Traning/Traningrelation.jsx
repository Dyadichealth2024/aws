import React, { useState } from 'react';
import { Grid, Typography, Button, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Traningrelation = () => {
  const [relationshipType, setRelationshipType] = useState('');
  const [showTrainingPoints, setShowTrainingPoints] = useState(false);

  const handleRelationshipChange = (event) => {
    setRelationshipType(event.target.value);
    setShowTrainingPoints(false); // Hide training points if relationship type changes
  };

  const handleStartTraining = () => {
    setShowTrainingPoints(true);
  };

  const trainingPoints = {
    Spousal: {
      communication: [
        "Practice active listening during conversations.",
        "Express your feelings and needs clearly.",
        "Avoid interrupting your partner while they are speaking.",
      ],
      qualityTime: [
        "Schedule regular date nights to reconnect.",
        "Engage in shared hobbies or activities.",
        "Plan weekend getaways to focus on each other.",
      ],
      conflictResolution: [
        "Address issues promptly, don’t let them fester.",
        "Use 'I' statements to express concerns without blame.",
        "Agree to take breaks if discussions become too heated.",
      ],
      understanding: [
        "Learn about each other's love languages.",
        "Be empathetic and try to see situations from your partner's perspective.",
        "Regularly check in on each other's emotional well-being.",
      ],
    },
    Parenting: {
      communication: [
        "Use positive reinforcement and encouragement.",
        "Listen to your children without judgment.",
        "Keep communication age-appropriate and clear.",
      ],
      qualityTime: [
        "Plan regular family outings or activities.",
        "Create daily or weekly rituals, like reading together.",
        "Spend one-on-one time with each child.",
      ],
      conflictResolution: [
        "Encourage open discussions about disagreements.",
        "Model calm and respectful behavior during conflicts.",
        "Establish clear, consistent rules and consequences.",
      ],
      understanding: [
        "Acknowledge and validate your child's feelings.",
        "Understand each child's unique personality and needs.",
        "Be patient and supportive during developmental stages.",
      ],
    },
    Family: {
      communication: [
        "Maintain regular contact through calls or visits.",
        "Be honest and transparent in your communications.",
        "Respect each other’s boundaries and privacy.",
      ],
      qualityTime: [
        "Plan regular family gatherings or celebrations.",
        "Engage in activities that everyone enjoys.",
        "Create traditions that bring the family together.",
      ],
      conflictResolution: [
        "Address family issues in a calm and respectful manner.",
        "Focus on resolving issues rather than assigning blame.",
        "Be willing to compromise and find common ground.",
      ],
      understanding: [
        "Respect the differences in opinions and lifestyles.",
        "Be empathetic to each family member's struggles.",
        "Encourage open dialogue about family expectations.",
      ],
    },
    Others: {
      communication: [
        "Be clear and direct in your communication.",
        "Listen actively without making assumptions.",
        "Respect the other person's point of view.",
      ],
      qualityTime: [
        "Spend time engaging in shared interests.",
        "Be present and attentive during interactions.",
        "Plan activities that strengthen the relationship.",
      ],
      conflictResolution: [
        "Approach conflicts with a problem-solving attitude.",
        "Avoid taking things personally or overreacting.",
        "Seek to understand before being understood.",
      ],
      understanding: [
        "Acknowledge and respect differences in perspectives.",
        "Show empathy and be supportive of their goals.",
        "Communicate openly about expectations and boundaries.",
      ],
    },
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Improve Your Relationship
          </Typography>
          <Typography variant="body1" gutterBottom>
            Select the type of relationship you want to improve, and we will provide you with tailored guidance and training.
          </Typography>

          <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
            <InputLabel>Relationship Type</InputLabel>
            <Select
              value={relationshipType}
              onChange={handleRelationshipChange}
              label="Relationship Type"
            >
              <MenuItem value="Spousal">Spousal Relationship</MenuItem>
              <MenuItem value="Parenting">Parenting Relationship</MenuItem>
              <MenuItem value="Family">Family Relationship</MenuItem>
              <MenuItem value="Others">Others Relationship</MenuItem>
            </Select>
          </FormControl>

          {relationshipType && (
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 4 }}
              onClick={handleStartTraining}
            >
              Start Training
            </Button>
          )}
        </Grid>

        {showTrainingPoints && relationshipType && (
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Training Points for {relationshipType} Relationship
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Communication:
            </Typography>
            <ul>
              {trainingPoints[relationshipType].communication.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <Typography variant="subtitle1" gutterBottom>
              Quality Time:
            </Typography>
            <ul>
              {trainingPoints[relationshipType].qualityTime.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <Typography variant="subtitle1" gutterBottom>
              Conflict Resolution:
            </Typography>
            <ul>
              {trainingPoints[relationshipType].conflictResolution.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <Typography variant="subtitle1" gutterBottom>
              Understanding:
            </Typography>
            <ul>
              {trainingPoints[relationshipType].understanding.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default Traningrelation;
