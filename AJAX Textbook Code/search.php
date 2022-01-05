<?php
  header("Content-type: text/xml");
  $names = array (
   "South Carolina (SC) - Columbia", "Alabama (AL) - Montgomery", "Alaska (AK) - Juneau", "Arizona (AZ) - Phoenix",
   "Arkansas (AR) - Little Rock", "California (CA) - Sacramento", "Colorado (CO) - Denver",
   "Connecticut (CT) - Hartford","Delaware (DE) - Dover", "Florida (FL) - Tallahassee",
   "Georgia (GA) - Atlanta", "Hawaii (HI) - Honolulu", "Idaho (ID) - Boise",
   "Illinois (IL) - Springfield", "Indiana (IN) - Indianapolis", "Iowa (IA) - Des Moines",
   "Kansas (KS) - Topeka", "Kentucky (KY) - Frankfort", "Louisiana (LA) - Baton Rouge", "Maine (ME) - Augusta", 
   "Maryland (MD) - Annapolis", "Massachusetts (MA) - Boston", "Michigan (MI) - Lansing", "Minnesota (MN) - St. Paul", "Minnesota (MN) - St. Paul",
   "Missouri (MO) - Jefferson City", "Montana (MT) - Helena", "Nebraska (NE) - Lincoln", "Nevada (NV) - Carson City", 
   "New Hampshire (NH) - Concord", "New Jersey (NJ) - Trenton", "New Mexico (NM) - Santa Fe", "New York (NY) - Albany", "North Carolina (NC) - Raleigh", "North Dakota (ND) - Bismarck", "Ohio (OH) - Columbus",
   "Oklahoma (OK) - Oklahoma City", "Oregon (OR) - Salem", "Pennsylvania (PA) - Harrisburg", "Rhode Island (RI) - Providence", "South Dakota (SD) - Pierre", "Tennessee (TN) - Nashville", "Texas (TX) - Austin", "Utah (UT) - Salt Lake City", "Vermont (VT) - Montpelier"
   , "Virginia (VA) - Richmond" , "Washington (WA) - Olympia", "West Virginia (WV) - Charleston", "Wisconsin (WI) - Madison", "Wyoming (WY) - Cheyenne");

echo "<?xml version=\"1.0\" ?>\n";
echo "<names>\n";
while (list($k,$v)=each($names)) {
   if (stristr($v,$_GET['query'])) {
      echo "<name>$v</name>\n";
   }
}
echo "</names>\n";
?>
