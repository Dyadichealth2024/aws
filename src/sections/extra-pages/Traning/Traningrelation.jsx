import React, { useState } from 'react';
import { Grid, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Favorite, FamilyRestroom, ChildCare, People } from '@mui/icons-material';

const Bubble = styled('div')(({ theme, selected }) => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 40px',
  margin: '10px',
  borderRadius: '50%',
  background: selected ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : theme.palette.grey[300],
  color: selected ? theme.palette.primary.contrastText : theme.palette.text.primary,
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: selected ? '0px 8px 20px rgba(0, 0, 0, 0.4)' : '0px 4px 10px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)',
  },
  '& > svg': {
    marginRight: '8px',
  },
}));

const icons = {
  Spousal: <Favorite />,
  Parenting: <ChildCare />,
  Family: <FamilyRestroom />,
  Others: <People />,
};

const Traningrelation = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showTrainingPoints, setShowTrainingPoints] = useState(false);

  const handleBubbleClick = (type) => {
    const typeIndex = selectedTypes.indexOf(type);
    if (typeIndex === -1) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      const newSelectedTypes = selectedTypes.filter((t) => t !== type);
      setSelectedTypes(newSelectedTypes);
    }
    setShowTrainingPoints(false);
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
    <Paper
      elevation={3}
      sx={{
        p: 4,
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
        borderRadius: '15px',
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Improve Your Relationship
          </Typography>
          <Typography variant="body1" gutterBottom>
            You can select multiple relations that you want to improve. Please select them based on your priority.
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Grid container spacing={2} justifyContent="center">
            {Object.keys(trainingPoints).map((type) => (
              <Grid item key={type}>
                <Bubble
                  selected={selectedTypes.includes(type)}
                  onClick={() => handleBubbleClick(type)}
                >
                  {icons[type]}
                  {selectedTypes.indexOf(type) !== -1 ? `${selectedTypes.indexOf(type) + 1} ` : ''}{type}
                </Bubble>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {selectedTypes.length > 0 && (
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: '10px 20px',
                borderRadius: '25px',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
              }}
              onClick={handleStartTraining}
            >
              Start Training
            </Button>
          </Grid>
        )}
      </Grid>

      {showTrainingPoints && selectedTypes.length > 0 && (
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} md={8}>
            {selectedTypes.map((type) => (
              <div key={type} style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Typography variant="h6" gutterBottom>
                  Training Points for {type} Relationship
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  Communication:
                </Typography>
                <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                  {trainingPoints[type].communication.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <Typography variant="subtitle1" gutterBottom>
                  Quality Time:
                </Typography>
                <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                  {trainingPoints[type].qualityTime.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <Typography variant="subtitle1" gutterBottom>
                  Conflict Resolution:
                </Typography>
                <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                  {trainingPoints[type].conflictResolution.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <Typography variant="subtitle1" gutterBottom>
                  Understanding:
                </Typography>
                <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                  {trainingPoints[type].understanding.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default Traningrelation;
