import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PageContainer, ContentWrapper, backgroundImages, fadeIn } from '../styles/sharedStyles';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  animation: `${fadeIn} 0.8s ease-out`,
  '&:before': {
    display: 'none',
  },
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
}));

const FAQ = () => {
  const faqs = [
    {
      question: "What types of printing services do you offer?",
      answer: "We offer a wide range of luxury printing services including business cards, wedding invitations, art prints, and custom designs."
    },
    {
      question: "How long does it take to complete an order?",
      answer: "Standard orders typically take 3-5 business days. Rush orders are available for an additional fee."
    },
    {
      question: "Do you offer custom designs?",
      answer: "Yes, we have a team of experienced designers who can create custom designs for your printing needs."
    },
    {
      question: "What paper types do you offer?",
      answer: "We offer a variety of premium paper types including matte, glossy, textured, and metallic finishes."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your order, we'll reprint it or provide a full refund."
    }
  ];

  return (
    <PageContainer style={{ backgroundImage: `url(${backgroundImages.faq})` }}>
      <ContentWrapper>
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 600,
              mb: 6,
              color: 'white',
              animation: `${fadeIn} 0.8s ease-out`,
            }}
          >
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <StyledAccordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </StyledAccordion>
          ))}
        </Container>
      </ContentWrapper>
    </PageContainer>
  );
};

export default FAQ; 