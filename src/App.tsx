import { SearchIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ChakraProvider,
  HStack,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  StackDivider,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <VStack divider={<StackDivider borderColor="gray.200" />} gap="4" pt="10">
        <VStack gap="4" width="full" paddingX="4">
          <Heading size="xl" fontWeight="bold">
            Marketplace
          </Heading>
          <Heading size="md" fontWeight="normal">
            Find your well
          </Heading>
        </VStack>

        <VStack gap="4" width="full" paddingX="4" alignItems="stretch">
          <Button size="lg" color="blue.500" rightIcon={<SearchIcon />} colorScheme="blue" variant="outline">
            Search
          </Button>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" as="span" textAlign="left">
                  Filter
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <VStack divider={<StackDivider borderColor="gray.200" />} gap="4" alignItems="stretch">
                  <VStack gap="3" alignItems="flex-start">
                    <Text size="md">Category</Text>
                    <Select placeholder="All categories">
                      <option value="physical">Physical</option>
                      <option value="mental">Mental</option>
                      <option value="financial">Financial</option>
                    </Select>
                    <Select placeholder="All subcategories">
                      <option value="physical">Gym</option>
                      <option value="mental">Gym</option>
                      <option value="financial">Gym</option>
                    </Select>
                    <HStack wrap="wrap">
                      <Tag variant="solid" colorScheme="blue" size="md">
                        <TagLabel>Gym</TagLabel>
                        <TagCloseButton></TagCloseButton>
                      </Tag>
                      {["Personal Trainer", "Yoga", "Cross Training", "Pilates", "Climbing", "Spin"].map((tag) => (
                        <Tag variant="outline" colorScheme="gray" size="md">
                          <TagLabel>{tag}</TagLabel>
                        </Tag>
                      ))}
                    </HStack>
                  </VStack>
                  <VStack gap="3" alignItems="flex-start">
                    <Text size="md">Type of experience</Text>
                    <HStack wrap="wrap">
                      <Tag variant="solid" colorScheme="blue" size="md">
                        <TagLabel>In Person</TagLabel>
                        <TagCloseButton></TagCloseButton>
                      </Tag>
                      {["Online"].map((tag) => (
                        <Tag variant="outline" colorScheme="gray" size="md">
                          <TagLabel>{tag}</TagLabel>
                        </Tag>
                      ))}
                    </HStack>
                  </VStack>
                  <PriceRangeFilter />
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </VStack>
    </ChakraProvider>
  );
}

export type PriceRangeFilterProps = {};
function PriceRangeFilter(props: PriceRangeFilterProps) {
  const [low, setLow] = useState(50);
  const [high, setHigh] = useState(100);

  function handleChange(vals: [number, number]) {
    setLow(vals[0]);
    setHigh(vals[1]);
  }

  return (
    <>
      <VStack gap="3" alignItems="stretch">
        <HStack alignItems="">
          <Text size="md" whiteSpace="nowrap">
            Price Range
          </Text>
          <Text size="md" color="gray.500" width="full" textAlign="right">
            {low}-{high} tokens
          </Text>
        </HStack>
        <RangeSlider
          value={[low, high]}
          min={0}
          max={200}
          colorScheme="blue"
          onChange={handleChange}
          step={5}
          width="90%"
          margin="auto"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
      </VStack>
    </>
  );
}

export default App;
