var DATA = [
  {
    "name": "Database Identifiers",
    "children": [
      {
        "identifier": "",
        "name": "specimen collector sample ID",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The user-defined name for the sample.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Store the collector sample ID. If this number is considered identifiable information, provide an alternative ID. Be sure to store the key that maps between the original and alternative IDs for traceability and follow up if necessary. Every collector sample ID from a single submitter must be unique. It can have any format, but we suggest that you make it concise, unique and consistent within your lab.",
        "examples": "prov_rona_99",
        "exportField": {
          "GISAID": [
            {
              "field": "Sample ID given by the sample provider"
            }
          ],
          "CNPHI": [
            {
              "field": "Primary Specimen ID"
            }
          ],
          "NML_LIMS": [
            {
              "field": "VD_LAB_NUMBER"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "sample_name"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "NML submitted specimen primary ID",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The primary ID of the specimen submitted thorough LaSER.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Store the identifier for the specimen submitted through the NML LaSER system.",
        "examples": "SR20-12345"
      },
      {
        "identifier": "",
        "name": "NML related specimen primary ID",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The primary ID of the related specimen previously submitted thorough LaSER",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Store the primary ID of the related specimen previously submitted thorough LaSER",
        "examples": "SR20-12345",
        "exportField": {
          "CNPHI": [
            {
              "field": "Related Specimen ID|Related Specimen Relationship Type"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "IRIDA sample name",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The identifier assigned to a sequenced isolate in IRIDA.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Store the IRIDA sample name. The IRIDA sample name will be created by the individual entering data into the IRIDA platform. IRIDA samples may be linked to metadata and sequence data, or just metadata alone. It is recommended that the IRIDA sample name be the same as, or contain, the specimen collector sample ID for better traceability. It is also recommended that the IRIDA sample name mirror the GISAID accession. IRIDA sample names cannot contain slashes. Slashes should be replaced by underscores. See IRIDA documentation for more information regarding special characters (https://irida.corefacility.ca/documentation/user/user/samples/#adding-a-new-sample). ",
        "examples": "prov_rona_99"
      },
      {
        "identifier": "",
        "name": "umbrella bioproject accession",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The INSDC accession number assigned to the umbrella BioProject for the Canadian SARS-CoV-2 sequencing effort.",
        "valueRequired": "",
        "capitalize": "UPPER",
        "guidance": "Store the umbrella BioProject accession by selecting it from the picklist in the template. The umbrella BioProject accession will be identical for all CanCOGen submitters. Different provinces will have their own BioProjects, however these BioProjects will be linked under one umbrella BioProject.",
        "examples": "PRJNA623807",
        "itemList": {
          "PRJNA623807": {}
        }
      },
      {
        "identifier": "",
        "name": "bioproject accession",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The INSDC accession number of the BioProject(s) to which the BioSample belongs.",
        "valueRequired": "",
        "capitalize": "UPPER",
        "guidance": "Store the BioProject accession number. BioProjects are an organizing tool that links together raw sequence data, assemblies, and their associated metadata. Each province will be assigned a different bioproject accession number by the National Microbiology Lab. A valid NCBI BioProject accession has prefix PRJN e.g., PRJNA12345, and is created once at the beginning of a new sequencing project. ",
        "examples": "PRJNA608651",
        "exportField": {
          "CNPHI": [
            {
              "field": "BioProject Accession"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_BIOPROJECT_ACCESSION"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "bioproject_accession"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "biosample accession",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The identifier assigned to a BioSample in INSDC archives.",
        "valueRequired": "",
        "capitalize": "UPPER",
        "guidance": "Store the accession returned from the BioSample submission. NCBI BioSamples will have the prefix SAMN.",
        "examples": "SAMN14180202",
        "exportField": {
          "CNPHI": [
            {
              "field": "BioSample Accession"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_BIOSAMPLE_ACCESSION"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "SRA accession",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The Sequence Read Archive (SRA) identifier linking raw read data, methodological metadata and quality control metrics submitted to the INSDC.",
        "valueRequired": "",
        "capitalize": "UPPER",
        "guidance": "Store the accession assigned to the submitted \"run\". NCBI-SRA accessions start with SRR.",
        "examples": "SRR11177792",
        "exportField": {
          "CNPHI": [
            {
              "field": "SRA Accession"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_SRA_ACCESSION"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "GenBank accession",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The GenBank identifier assigned to the sequence in the INSDC archives.",
        "valueRequired": "",
        "capitalize": "UPPER",
        "guidance": "Store the accession returned from a GenBank submission (viral genome assembly).",
        "examples": "MN908947.3",
        "exportField": {
          "CNPHI": [
            {
              "field": "GenBank Accession"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "GISAID accession",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The GISAID accession number assigned to the sequence.",
        "valueRequired": "",
        "capitalize": "UPPER",
        "guidance": "Store the accession returned from the GISAID submission.",
        "examples": "EPI_ISL_436489",
        "exportField": {
          "CNPHI": [
            {
              "field": "GISAID Accession (if known)"
            }
          ],
          "NML_LIMS": [
            {
              "field": "GISAID Accession ID"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "GISAID_accession"
            }
          ]
        }
      }
    ]
  },
  {
    "name": "Sample collection and processing",
    "children": [
      {
        "identifier": "",
        "name": "sample collected by",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The name of the agency that collected the original sample.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "The name of the sample collector should be written out in full, (with minor exceptions) and be consistent across multple submissions e.g. Public Health Agency of Canada, Public Health Ontario, BC Centre for Disease Control. The sample collector specified is at the discretion of the data provider (i.e. may be hospital, provincial public health lab, or other).",
        "examples": "BC Centre for Disease Control",
        "exportField": {
          "GISAID": [
            {
              "field": "Originating lab"
            }
          ],
          "CNPHI": [
            {
              "field": "Lab Name"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "collected_by"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "sample collector contact email",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The email address of the contact responsible for follow-up regarding the sample.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "The email address can represent a specific individual or lab e.g. johnnyblogs@lab.ca, or RespLab@lab.ca",
        "examples": "RespLab@lab.ca"
      },
      {
        "identifier": "",
        "name": "sample collector contact address",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The mailing address of the agency submitting the sample.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "The mailing address should be in the format: Street number and name, City, Province/Territory, Postal Code, Country",
        "examples": "655 Lab St, Vancouver, British Columbia, V5N 2A2, Canada",
        "exportField": {
          "GISAID": [
            {
              "field": "Address"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "sequence submitted by",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The name of the agency that generated the sequence.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "The name of the agency should be written out in full, (with minor exceptions) and be consistent across multple submissions. If submitting specimens rather than sequencing data, please put the \"National Microbiology Laboratory (NML)\".",
        "examples": "Public Health Ontario (PHO)",
        "exportField": {
          "GISAID": [
            {
              "field": "Submitting lab"
            }
          ],
          "CNPHI": [
            {
              "field": "Sequencing Centre"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_SEQUENCING_CENTRE"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "sequenced_by"
            }
          ]
        },
        "itemList": {
          "National Microbiology Laboratory (NML)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NML"
                }
              ]
            }
          },
          "BCCDC Public Health Laboratory": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BCCDC"
                }
              ]
            }
          },
          "Alberta Precision Labs (APL)": {
            "itemList": {
              "Alberta ProvLab North (APLN)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "APL-E"
                    }
                  ]
                }
              },
              "Alberta ProvLab South (APLS)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "APL-C"
                    }
                  ]
                }
              }
            }
          },
          "Public Health Ontario (PHO)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PHO"
                }
              ]
            }
          },
          "Laboratoire de sant\u00e9 publique du Qu\u00e9bec (LSPQ)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LSPQ"
                }
              ]
            }
          },
          "Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "RRPL"
                }
              ]
            }
          },
          "Manitoba Cadham Provincial Laboratory": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CADHAM"
                }
              ]
            }
          },
          "Nova Scotia Health Authority": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NS_QE_II"
                }
              ]
            }
          },
          "New Brunswick - Vitalit\u00e9 Health Network": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "GEORGES_L_DUMONT"
                }
              ]
            }
          },
          "Newfoundland and Labrador - Eastern Health": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "EASTERN_HEALTH"
                }
              ]
            }
          },
          "Prince Edward Island - Health PEI": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PEI"
                }
              ]
            }
          },
          "Ontario Institute for Cancer Research (OICR)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "OICR"
                }
              ]
            }
          },
          "McMaster University": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "MCMASTER"
                }
              ]
            }
          },
          "McGill University": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "MCGILL"
                }
              ]
            }
          },
          "The Centre for Applied Genomics (TCAG)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "TCAG"
                }
              ]
            }
          },
          "Sunnybrook Health Sciences Centre": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SUNNYBROOK"
                }
              ]
            }
          },
          "Thunder Bay Regional Health Sciences Centre": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "THUNDER_BAY"
                }
              ]
            }
          },
          "Canadore College": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CANADORE"
                }
              ]
            }
          },
          "Queen\u2019s University / Kingston Health Sciences Centre": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "QUEENS_UNIV"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "sequence submitter contact email",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The email address of the contact responsible for follow-up regarding the sequence.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "The email address can represent a specific individual or lab e.g. johnnyblogs@lab.ca, or RespLab@lab.ca",
        "examples": ""
      },
      {
        "identifier": "",
        "name": "sequence submitter contact address",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The mailing address of the agency submitting the sequence.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "The mailing address should be in the format: Street number and name, City, Province/Territory, Postal Code, Country",
        "examples": "123 Sunnybrooke St, Toronto, Ontario, M4P 1L6, Canada",
        "exportField": {
          "GISAID": [
            {
              "field": "Address"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "sample collection date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The date on which the sample was collected.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Sample collection date is critical for surveillance and many types of analyses. Required granularity includes year, month and day. If this date is considered identifiable information, it is acceptable to add \"jitter\" by adding or subtracting a calendar day (acceptable by GISAID). Alternatively, \u201dreceived date\u201d may be used as a substitute. The date should be provided in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2020-03-16",
        "exportField": {
          "GISAID": [
            {
              "field": "Collection date"
            }
          ],
          "CNPHI": [
            {
              "field": "Patient Sample Collected Date"
            }
          ],
          "NML_LIMS": [
            {
              "field": "HC_COLLECT_DATE"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "sample collection date"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "sample collection date precision",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "",
        "examples": "",
        "exportField": {
          "CNPHI": [
            {
              "field": "Precision of date collected"
            }
          ],
          "NML_LIMS": [
            {
              "field": "HC_TEXT2"
            }
          ]
        },
        "itemList": {
          "year": {},
          "month": {},
          "day": {}
        }
      },
      {
        "identifier": "",
        "name": "sample received date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The date on which the sample was received.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "ISO 8601 standard \"YYYY-MM-DD\".",
        "examples": "2020-03-20"
      },
      {
        "identifier": "",
        "name": "geo_loc_name (country)",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The country where the sample was collected.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide the country name from the controlled vocabulary provided.",
        "examples": "Canada",
        "exportField": {
          "GISAID": [
            {
              "field": "Location"
            }
          ],
          "CNPHI": [
            {
              "field": "Patient Country"
            }
          ],
          "NML_LIMS": [
            {
              "field": "HC_COUNTRY"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "geo_loc_name"
            }
          ]
        },
        "itemList": {
          "Afghanistan": {},
          "Albania": {},
          "Algeria": {},
          "American Samoa": {},
          "Andorra": {},
          "Angola": {},
          "Anguilla": {},
          "Antarctica": {},
          "Antigua and Barbuda": {},
          "Argentina": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ARGENTINA"
                }
              ]
            }
          },
          "Armenia": {},
          "Aruba": {},
          "Ashmore and Cartier Islands": {},
          "Australia": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "AUSTRALIA"
                }
              ]
            }
          },
          "Austria": {},
          "Azerbaijan": {},
          "Bahamas": {},
          "Bahrain": {},
          "Baker Island": {},
          "Bangladesh": {},
          "Barbados": {},
          "Bassas da India": {},
          "Belarus": {},
          "Belgium": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BELGIUM"
                }
              ]
            }
          },
          "Belize": {},
          "Benin": {},
          "Bermuda": {},
          "Bhutan": {},
          "Bolivia": {},
          "Borneo": {},
          "Bosnia and Herzegovina": {},
          "Botswana": {},
          "Bouvet Island": {},
          "Brazil": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BRAZIL"
                }
              ]
            }
          },
          "British Virgin Islands": {},
          "Brunei": {},
          "Bulgaria": {},
          "Burkina Faso": {},
          "Burundi": {},
          "Cambodia": {},
          "Cameroon": {},
          "Canada": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA"
                }
              ]
            }
          },
          "Cape Verde": {},
          "Cayman Islands": {},
          "Central African Republic": {},
          "Chad": {},
          "Chile": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CHILE"
                }
              ]
            }
          },
          "China": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CHINA"
                }
              ]
            }
          },
          "Christmas Island": {},
          "Clipperton Island": {},
          "Cocos Islands": {},
          "Colombia": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "COLUMBIA"
                }
              ]
            }
          },
          "Comoros": {},
          "Cook Islands": {},
          "Coral Sea Islands": {},
          "Costa Rica": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "COSTA_RICA"
                }
              ]
            }
          },
          "Cote d'Ivoire": {},
          "Croatia": {},
          "Cuba": {},
          "Curacao": {},
          "Cyprus": {},
          "Czech Republic": {},
          "Democratic Republic of the Congo": {},
          "Denmark": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "DENMARK"
                }
              ]
            }
          },
          "Djibouti": {},
          "Dominica": {},
          "Dominican Republic": {},
          "Ecuador": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ECUADOR"
                }
              ]
            }
          },
          "Egypt": {},
          "El Salvador": {},
          "Equatorial Guinea": {},
          "Eritrea": {},
          "Estonia": {},
          "Eswatini": {},
          "Ethiopia": {},
          "Europa Island": {},
          "Falkland Islands (Islas Malvinas)": {},
          "Faroe Islands": {},
          "Fiji": {},
          "Finland": {},
          "France": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FRANCE"
                }
              ]
            }
          },
          "French Guiana": {},
          "French Polynesia": {},
          "French Southern and Antarctic Lands": {},
          "Gabon": {},
          "Gambia": {},
          "Gaza Strip": {},
          "Georgia": {},
          "Germany": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "GERMANY"
                }
              ]
            }
          },
          "Ghana": {},
          "Gibraltar": {},
          "Glorioso Islands": {},
          "Greece": {},
          "Greenland": {},
          "Grenada": {},
          "Guadeloupe": {},
          "Guam": {},
          "Guatemala": {},
          "Guernsey": {},
          "Guinea": {},
          "Guinea-Bissau": {},
          "Guyana": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "GUYANA"
                }
              ]
            }
          },
          "Haiti": {},
          "Heard Island and McDonald Islands": {},
          "Honduras": {},
          "Hong Kong": {},
          "Howland Island": {},
          "Hungary": {},
          "Iceland": {},
          "India": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "INDIA"
                }
              ]
            }
          },
          "Indonesia": {},
          "Iran": {},
          "Iraq": {},
          "Ireland": {},
          "Isle of Man": {},
          "Israel": {},
          "Italy": {},
          "Jamaica": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "JAMAICA"
                }
              ]
            }
          },
          "Jan Mayen": {},
          "Japan": {},
          "Jarvis Island": {},
          "Jersey": {},
          "Johnston Atoll": {},
          "Jordan": {},
          "Juan de Nova Island": {},
          "Kazakhstan": {},
          "Kenya": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "KENYA"
                }
              ]
            }
          },
          "Kerguelen Archipelago": {},
          "Kingman Reef": {},
          "Kiribati": {},
          "Kosovo": {},
          "Kuwait": {},
          "Kyrgyzstan": {},
          "Laos": {},
          "Latvia": {},
          "Lebanon": {},
          "Lesotho": {},
          "Liberia": {},
          "Libya": {},
          "Liechtenstein": {},
          "Line Islands": {},
          "Lithuania": {},
          "Luxembourg": {},
          "Macau": {},
          "Madagascar": {},
          "Malawi": {},
          "Malaysia": {},
          "Maldives": {},
          "Mali": {},
          "Malta": {},
          "Marshall Islands": {},
          "Martinique": {},
          "Mauritania": {},
          "Mauritius": {},
          "Mayotte": {},
          "Mexico": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "MEXICO"
                }
              ]
            }
          },
          "Micronesia": {},
          "Midway Islands": {},
          "Moldova": {},
          "Monaco": {},
          "Mongolia": {},
          "Montenegro": {},
          "Montserrat": {},
          "Morocco": {},
          "Mozambique": {},
          "Myanmar": {},
          "Namibia": {},
          "Nauru": {},
          "Navassa Island": {},
          "Nepal": {},
          "Netherlands": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NETHERLANDS"
                }
              ]
            }
          },
          "New Caledonia": {},
          "New Zealand": {},
          "Nicaragua": {},
          "Niger": {},
          "Nigeria": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NIGERIA"
                }
              ]
            }
          },
          "Niue": {},
          "Norfolk Island": {},
          "North Korea": {},
          "North Macedonia": {},
          "North Sea": {},
          "Northern Mariana Islands": {},
          "Norway": {},
          "Oman": {},
          "Pakistan": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PAKISTAN"
                }
              ]
            }
          },
          "Palau": {},
          "Panama": {},
          "Papua New Guinea": {},
          "Paracel Islands": {},
          "Paraguay": {},
          "Peru": {},
          "Philippines": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PHILIPPINE"
                }
              ]
            }
          },
          "Pitcairn Islands": {},
          "Poland": {},
          "Portugal": {},
          "Puerto Rico": {},
          "Qatar": {},
          "Republic of the Congo": {},
          "Reunion": {},
          "Romania": {},
          "Ross Sea": {},
          "Russia": {},
          "Rwanda": {},
          "Saint Helena": {},
          "Saint Kitts and Nevis": {},
          "Saint Lucia": {},
          "Saint Pierre and Miquelon": {},
          "Saint Martin": {},
          "Saint Vincent and the Grenadines": {},
          "Samoa": {},
          "San Marino": {},
          "Sao Tome and Principe": {},
          "Saudi Arabia": {},
          "Senegal": {},
          "Serbia": {},
          "Seychelles": {},
          "Sierra Leone": {},
          "Singapore": {},
          "Sint Maarten": {},
          "Slovakia": {},
          "Slovenia": {},
          "Solomon Islands": {},
          "Somalia": {},
          "South Africa": {},
          "South Georgia and the South Sandwich Islands": {},
          "South Korea": {},
          "South Sudan": {},
          "Spain": {},
          "Spratly Islands": {},
          "Sri Lanka": {},
          "State of Palestine": {},
          "Sudan": {},
          "Suriname": {},
          "Svalbard": {},
          "Swaziland": {},
          "Sweden": {},
          "Switzerland": {},
          "Syria": {},
          "Taiwan": {},
          "Tajikistan": {},
          "Tanzania": {},
          "Thailand": {},
          "Timor-Leste": {},
          "Togo": {},
          "Tokelau": {},
          "Tonga": {},
          "Trinidad and Tobago": {},
          "Tromelin Island": {},
          "Tunisia": {},
          "Turkey": {},
          "Turkmenistan": {},
          "Turks and Caicos Islands": {},
          "Tuvalu": {},
          "United States of America": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "US"
                }
              ]
            }
          },
          "Uganda": {},
          "Ukraine": {},
          "United Arab Emirates": {},
          "United Kingdom": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "UNITEDKING"
                }
              ]
            }
          },
          "Uruguay": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "URUGUAY"
                }
              ]
            }
          },
          "Uzbekistan": {},
          "Vanuatu": {},
          "Venezuela": {},
          "Viet Nam": {},
          "Virgin Islands": {},
          "Wake Island": {},
          "Wallis and Futuna": {},
          "West Bank": {},
          "Western Sahara": {},
          "Yemen": {},
          "Zambia": {},
          "Zimbabwe": {}
        }
      },
      {
        "identifier": "",
        "name": "geo_loc_name (state/province/territory)",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The province/territory where the sample was collected.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide the province/territory name from the controlled vocabulary provided.",
        "examples": "Saskatchewan",
        "exportField": {
          "CNPHI": [
            {
              "field": "Patient Province"
            }
          ],
          "NML_LIMS": [
            {
              "field": "HC_PROVINCE"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "geo_loc_name"
            }
          ]
        },
        "itemList": {
          "Alberta": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-AB"
                }
              ]
            }
          },
          "British Columbia": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-BC"
                }
              ]
            }
          },
          "Manitoba": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-MB"
                }
              ]
            }
          },
          "New Brunswick": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-NB"
                }
              ]
            }
          },
          "Newfoundland and Labrador": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-NL"
                }
              ]
            }
          },
          "Northwest Territories": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-NT"
                }
              ]
            }
          },
          "Nova Scotia": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-NS"
                }
              ]
            }
          },
          "Nunavut": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-NU"
                }
              ]
            }
          },
          "Ontario": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-ON"
                }
              ]
            }
          },
          "Prince Edward Island": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-PE"
                }
              ]
            }
          },
          "Quebec": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-QC"
                }
              ]
            }
          },
          "Saskatchewan": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-SK"
                }
              ]
            }
          },
          "Yukon": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CA-YT"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "geo_loc_name (city)",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The city where the sample was collected.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the city name. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "Medicine Hat",
        "exportField": {
          "CNPHI": [
            {
              "field": "Patient City"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "organism",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Taxonomic name of the organism.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Use \"Severe acute respiratory syndrome coronavirus 2\". This value is provided in the template.",
        "examples": "Severe acute respiratory syndrome coronavirus 2",
        "exportField": {
          "CNPHI": [
            {
              "field": "Pathogen"
            }
          ],
          "NML_LIMS": [
            {
              "field": "HC_CURRENT_ID"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "organism"
            }
          ]
        },
        "itemList": {
          "Severe acute respiratory syndrome coronavirus 2": {},
          "RaTG13": {},
          "RmYN02": {}
        }
      },
      {
        "identifier": "",
        "name": "isolate",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Identifier of the specific isolate.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide the GISAID virus name, which should be written in the format \u201chCov-19/CANADA/xxxxx/2020\u201d.",
        "examples": "hCov-19/CANADA/prov_rona_99/2020",
        "exportField": {
          "GISAID": [
            {
              "field": "Virus name"
            }
          ],
          "CNPHI": [
            {
              "field": "GISAID Virus Name"
            }
          ],
          "NML_LIMS": [
            {
              "field": "RESULT - CANCOGEN_SUBMISSIONS"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolate"
            },
            {
              "field": "GISAID_virus_name"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "purpose of sampling",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The reason that the sample was collected.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "The reason a sample was collected may provide information about potential biases in sampling strategy. Provide the purpose of sampling from the picklist in the template. Most likely, the sample was collected for Diagnostic testing. The reason why a sample was originally collected may differ from the reason why it was selected for sequencing, which should be indicated in the \"purpose of sequencing\" field. ",
        "examples": "Diagnostic testing",
        "exportField": {
          "CNPHI": [
            {
              "field": "Reason for Sampling"
            }
          ],
          "NML_LIMS": [
            {
              "field": "HC_SAMPLE_CATEGORY"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "purpose_of_sampling"
            }
          ]
        },
        "itemList": {
          "Cluster/Outbreak investigation": {},
          "Diagnostic testing": {},
          "Research": {},
          "Surveillance": {}
        }
      },
      {
        "identifier": "",
        "name": "purpose of sampling details",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The description of why the sample was collected, providing specific details.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide an expanded description of why the sample was collected using free text. The description may include the importance of the sample for a particular public health investigation/surveillance activity/research question. If details are not available, provide a null value.",
        "examples": "The sample was collected to investigate the prevalence of variants associated with mink-to-human transmission in Canada. ",
        "exportField": {
          "CNPHI": [
            {
              "field": "Details on the Reason for Sampling"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "description"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "NML submitted specimen type",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          ""
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The type of specimen submitted to the NML for testing.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "This information is required for upload through the CNPHI LaSER system. Select the specimen type from the pick list provided. If sequence data is being submitted rather than a specimen for testing, select \u201cNot Applicable\u201d.",
        "examples": "swab",
        "exportField": {
          "CNPHI": [
            {
              "field": "Specimen Type"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_SPECIMEN_TYPE"
            }
          ]
        },
        "itemList": {
          "Swab": {
            "exportField": {
              "NML_LIMS": [
                {
                  "field": "PH_SPECIMEN_TYPE",
                  "value": "SWAB"
                }
              ]
            }
          },
          "RNA": {
            "exportField": {
              "NML_LIMS": [
                {
                  "field": "PH_SPECIMEN_TYPE",
                  "value": "RNA"
                }
              ]
            }
          },
          "mRNA (cDNA)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "field": "PH_SPECIMEN_TYPE",
                  "value": "MRNA_CDNA"
                }
              ]
            }
          },
          "Nucleic acid": {
            "exportField": {
              "NML_LIMS": [
                {
                  "field": "PH_SPECIMEN_TYPE",
                  "value": "NUCLEIC_ACID"
                }
              ]
            }
          },
          "Not Applicable": {
            "exportField": {
              "NML_LIMS": [
                {
                  "field": "PH_SPECIMEN_TYPE",
                  "value": "NA"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "NML related specimen relationship type",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The relationship of the related specimen to the previous submission.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the specimen type of the original sample submitted from the pick list provided, so that additional specimen testing can be tracked in the system.",
        "examples": "Follow-up",
        "exportField": {
          "CNPHI": [
            {
              "field": "Related Specimen ID|Related Specimen Relationship Type"
            }
          ]
        },
        "itemList": {
          "Acute": {},
          "Convalescent": {},
          "Familial": {},
          "Follow-up": {},
          "Previously Submitted": {}
        }
      },
      {
        "identifier": "",
        "name": "anatomical material",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "A substance obtained from an anatomical part of an organism e.g. tissue, blood.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide a descriptor if an anatomical material was sampled. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Blood",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Anatomical Material"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_ISOLATION_SITE_DESC"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source"
            },
            {
              "field": "anatomical_material"
            }
          ]
        },
        "itemList": {
          "Blood": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BLOOD"
                }
              ]
            }
          },
          "Fluid": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FLUID"
                }
              ]
            },
            "itemList": {
              "Saliva": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "SALIVA"
                    }
                  ]
                }
              },
              "Fluid (cerebrospinal (CSF))": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "FLUID_CSF"
                    }
                  ]
                }
              },
              "Fluid (pericardial)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "FLUID_PERICARDIAL"
                    }
                  ]
                }
              },
              "Fluid (pleural)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "FLUID_PLEURAL"
                    }
                  ]
                }
              },
              "Fluid (vaginal)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "FLUID_VAGINAL"
                    }
                  ]
                }
              },
              "Fluid (amniotic)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "FLUID_AMNIOTIC"
                    }
                  ]
                }
              }
            }
          },
          "Tissue": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "TISSUE"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "anatomical part",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "An anatomical part of an organism e.g. oropharynx.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide a descriptor if an anatomical part was sampled. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Nasopharynx (NP)",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Anatomical Site"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_ISOLATION_SITE"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source"
            },
            {
              "field": "anatomical_part"
            }
          ]
        },
        "itemList": {
          "Anus": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ANUS"
                }
              ]
            }
          },
          "Buccal mucosa": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BUCCAL_MUCOSA"
                }
              ]
            }
          },
          "Duodenum": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "DUODENUM"
                }
              ]
            }
          },
          "Eye": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "EYE"
                }
              ]
            }
          },
          "Intestine": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "INTESTINE"
                }
              ]
            }
          },
          "Rectum": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "RECTUM"
                }
              ]
            }
          },
          "Skin": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SKIN"
                }
              ]
            }
          },
          "Stomach": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "STOMACH"
                }
              ]
            }
          },
          "Upper respiratory tract": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "UPPER"
                }
              ]
            },
            "itemList": {
              "Anterior Nares": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "ANTERIOR_NARES"
                    }
                  ]
                }
              },
              "Esophagus": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "ESOPHAGUS"
                    }
                  ]
                }
              },
              "Ethmoid sinus": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "ETHMOID_SINUS"
                    }
                  ]
                }
              },
              "Nasal Cavity": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "NASAL_CAVITY"
                    }
                  ]
                },
                "itemList": {
                  "Middle Nasal Turbinate": {
                    "exportField": {
                      "NML_LIMS": [
                        {
                          "value": "MIDDLE_NASAL"
                        }
                      ]
                    }
                  },
                  "Inferior Nasal Turbinate": {
                    "exportField": {
                      "NML_LIMS": [
                        {
                          "value": "INFERIOR_NASAL"
                        }
                      ]
                    }
                  }
                }
              },
              "Nasopharynx (NP)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "NASOPHARYNX_NP"
                    }
                  ]
                }
              },
              "Oropharynx (OP)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "OROPHARYNX_OP"
                    }
                  ]
                }
              }
            }
          },
          "Lower respiratory tract": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LOWER"
                }
              ]
            },
            "itemList": {
              "Bronchus": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "BRONCHUS"
                    }
                  ]
                }
              },
              "Lung": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "LUNG"
                    }
                  ]
                },
                "itemList": {
                  "Bronchiole": {
                    "exportField": {
                      "NML_LIMS": [
                        {
                          "value": "BRONCHIOLE"
                        }
                      ]
                    }
                  },
                  "Alveolar sac": {
                    "exportField": {
                      "NML_LIMS": [
                        {
                          "value": "ALVEOLAR_SAC"
                        }
                      ]
                    }
                  }
                }
              },
              "Pleural sac": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "PLEURAL_SAC"
                    }
                  ]
                },
                "itemList": {
                  "Pleural cavity": {
                    "exportField": {
                      "NML_LIMS": [
                        {
                          "value": "PLEURAL_CAVITY"
                        }
                      ]
                    }
                  }
                }
              },
              "Trachea": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "TRACHEA"
                    }
                  ]
                }
              }
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "body product",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "A substance excreted/secreted from an organism e.g. feces, urine, sweat.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide a descriptor if a body product was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Feces",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Body Product"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_SPECIMEN_SOURCE_DESC"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source"
            },
            {
              "field": "body_product"
            }
          ]
        },
        "itemList": {
          "Feces": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FECES"
                }
              ]
            }
          },
          "Urine": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "URINE"
                }
              ]
            }
          },
          "Sweat": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SWEAT"
                }
              ]
            }
          },
          "Mucus": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "MUCUS"
                }
              ]
            },
            "itemList": {
              "Sputum": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "SPUTUM"
                    }
                  ]
                }
              }
            }
          },
          "Tear": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "TEAR"
                }
              ]
            }
          },
          "Fluid (seminal)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FLUID_SEMINAL"
                }
              ]
            }
          },
          "Breast Milk": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BREAST_MILK"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "environmental material",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "A substance obtained from the natural or man-made environment e.g. soil, water, sewage.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide a descriptor if an environmental material was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Face mask",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Environmental Material"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_ENVIRONMENTAL_MATERIAL"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source"
            },
            {
              "field": "environmental_material"
            }
          ]
        },
        "itemList": {
          "Air vent": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "AIR_VENT"
                }
              ]
            }
          },
          "Banknote": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BANKNOTE"
                }
              ]
            }
          },
          "Bed rail": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BED_RAIL"
                }
              ]
            }
          },
          "Building floor": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BUILDING_FLOOR"
                }
              ]
            }
          },
          "Cloth": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CLOTH"
                }
              ]
            }
          },
          "Control panel": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CONTROL_PANEL"
                }
              ]
            }
          },
          "Door": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "DOOR"
                }
              ]
            }
          },
          "Door handle": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "DOOR_HANDLE"
                }
              ]
            }
          },
          "Face mask": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FACE_MASK"
                }
              ]
            }
          },
          "Face shield": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FACE_SHIELD"
                }
              ]
            }
          },
          "Food": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FOOD"
                }
              ]
            }
          },
          "Food packaging": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FOOD_PACKAGING"
                }
              ]
            }
          },
          "Glass": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "GLASS"
                }
              ]
            }
          },
          "Handrail": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HANDRAIL"
                }
              ]
            }
          },
          "Hospital gown": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HOSPITAL_GOWN"
                }
              ]
            }
          },
          "Light switch": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LIGHT_SWITCH"
                }
              ]
            }
          },
          "Locker": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LOCKER"
                }
              ]
            }
          },
          "N95 mask": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "N95_MASK"
                }
              ]
            }
          },
          "Nurse call button": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NURSE_CALL_BUTTON"
                }
              ]
            }
          },
          "Paper": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PAPER"
                }
              ]
            }
          },
          "Particulate matter": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PARTICULATE_MATTER"
                }
              ]
            }
          },
          "Plastic": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PLASTIC"
                }
              ]
            }
          },
          "PPE gown": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PPE_GOWN"
                }
              ]
            }
          },
          "Sewage": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SEWAGE"
                }
              ]
            }
          },
          "Sink": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SINK"
                }
              ]
            }
          },
          "Soil": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SOIL"
                }
              ]
            }
          },
          "Stainless steel": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "STAINLESS_STEEL"
                }
              ]
            }
          },
          "Tissue paper": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "TISSUE_PAPER"
                }
              ]
            }
          },
          "Toilet bowl": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "TOILET_BOWL"
                }
              ]
            }
          },
          "Water": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "WATER"
                }
              ]
            }
          },
          "Wastewater": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "WASTEWATER"
                }
              ]
            }
          },
          "Window": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "WINDOW"
                }
              ]
            }
          },
          "Wood": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "WOOD"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "environmental site",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "An environmental location may describe a site in the natural or built environment e.g. contact surface, metal can, hospital, wet market, bat cave.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide a descriptor if an environmental site was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Production Facility",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Environmental Site"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_ENVIRONMENTAL_SITE"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source"
            },
            {
              "field": "environmental_site"
            }
          ]
        },
        "itemList": {
          "Acute care facility": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ACUTE_CARE_FACILITY"
                }
              ]
            }
          },
          "Animal house": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ANIMAL_HOUSE"
                }
              ]
            }
          },
          "Bathroom": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BATHROOM"
                }
              ]
            }
          },
          "Clinical assessment centre": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CLINICAL_ASSESSMENT_"
                }
              ]
            }
          },
          "Conference venue": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CONFERENCE_VENUE"
                }
              ]
            }
          },
          "Corridor": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CORRIDOR"
                }
              ]
            }
          },
          "Daycare": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "DAYCARE"
                }
              ]
            }
          },
          "Emergency room (ER)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "EMERGENCY_ROOM_ER"
                }
              ]
            }
          },
          "Family practice clinic": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FAMILY_PRACTICE_CLIN"
                }
              ]
            }
          },
          "Group home": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "GROUP_HOME"
                }
              ]
            }
          },
          "Homeless shelter": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HOMELESS_SHELTER"
                }
              ]
            }
          },
          "Hospital": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HOSPITAL"
                }
              ]
            }
          },
          "Intensive Care Unit (ICU)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "INTENSIVE_CARE_UNIT_"
                }
              ]
            }
          },
          "Long Term Care Facility": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LONG_TERM_CARE_FACIL"
                }
              ]
            }
          },
          "Patient room": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PATIENT_ROOM"
                }
              ]
            }
          },
          "Prison": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PRISON"
                }
              ]
            }
          },
          "Production Facility": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PRODUCTION_FACILITY"
                }
              ]
            }
          },
          "School": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SCHOOL"
                }
              ]
            }
          },
          "Sewage Plant": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SEWAGE_PLANT"
                }
              ]
            }
          },
          "Subway train": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SUBWAY_TRAIN"
                }
              ]
            }
          },
          "Wet market": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "WET_MARKET"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "collection device",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The instrument or container used to collect the sample e.g. swab.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide a descriptor if a device was used for sampling. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Swab",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Specimen Collection Matrix"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_SPECIMEN_TYPE_ORIG"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source"
            },
            {
              "field": "collection_device"
            }
          ]
        },
        "itemList": {
          "Air filter": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "AIR_FILTER"
                }
              ]
            }
          },
          "Blood Collection Tube": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BLOOD_TUBE"
                }
              ]
            }
          },
          "Bronchoscope": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BRONCHOSCOPE"
                }
              ]
            }
          },
          "Collection Container": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CONTAINER"
                }
              ]
            }
          },
          "Collection Cup": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CUP"
                }
              ]
            }
          },
          "Fibrobronchoscope Brush": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BRUSH"
                }
              ]
            }
          },
          "Filter": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FILTER"
                }
              ]
            }
          },
          "Fine Needle": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FINE_NEEDLE"
                }
              ]
            }
          },
          "Microcapillary tube": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "MICROCAPILLARY_TUBE"
                }
              ]
            }
          },
          "Micropipette": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "MICROPIPETTE"
                }
              ]
            }
          },
          "Needle": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NEEDLE"
                }
              ]
            }
          },
          "Serum Collection Tube": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SERUM_TUBE"
                }
              ]
            }
          },
          "Sputum Collection Tube": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SPUTUM_TUBE"
                }
              ]
            }
          },
          "Suction Catheter": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SUCTION_CATHETER"
                }
              ]
            }
          },
          "Swab": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SWAB"
                }
              ]
            }
          },
          "Urine Collection Tube": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "URINE_TUBE"
                }
              ]
            }
          },
          "Virus Transport Medium": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "TRANSPORT_MEDIUM"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "collection method",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The process used to collect the sample e.g. phlebotamy, necropsy.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide a descriptor if a collection method was used for sampling. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Bronchoalveolar lavage (BAL)",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Collection Method"
            }
          ],
          "NML_LIMS": [
            {
              "field": "COLLECTION_METHOD"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source"
            },
            {
              "field": "collection_method"
            }
          ]
        },
        "itemList": {
          "Amniocentesis": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "AMNIOCENTESIS"
                }
              ]
            }
          },
          "Aspiration": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ASPIRATION"
                }
              ]
            },
            "itemList": {
              "Suprapubic Aspiration": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "SUPRAPUBIC_ASPIRATIO"
                    }
                  ]
                }
              },
              "Tracheal aspiration": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "TRACHEAL_ASPIRATION"
                    }
                  ]
                }
              },
              "Vacuum Aspiration": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "VACUUM_ASPIRATION"
                    }
                  ]
                }
              }
            }
          },
          "Biopsy": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BIOPSY"
                }
              ]
            },
            "itemList": {
              "Needle Biopsy": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "NEEDLE_BIOPSY"
                    }
                  ]
                }
              }
            }
          },
          "Filtration": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FILTRATION"
                }
              ]
            },
            "itemList": {
              "Air filtration": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "AIR_FILTRATION"
                    }
                  ]
                }
              }
            }
          },
          "Lavage": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LAVAGE"
                }
              ]
            },
            "itemList": {
              "Bronchoalveolar lavage (BAL)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "BAL"
                    }
                  ]
                }
              },
              "Gastric Lavage": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "GASTRIC_LAVAGE"
                    }
                  ]
                }
              }
            }
          },
          "Lumbar Puncture": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LUMBAR_PUNCTURE"
                }
              ]
            }
          },
          "Necropsy": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NECROPSY"
                }
              ]
            }
          },
          "Phlebotomy": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PHLEBOTOMY"
                }
              ]
            }
          },
          "Rinsing": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "RINSING"
                }
              ]
            },
            "itemList": {
              "Saline gargle (mouth rinse and gargle)": {}
            }
          },
          "Scraping": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SCRAPING"
                }
              ]
            }
          },
          "Swabbing": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SWABBING"
                }
              ]
            },
            "itemList": {
              "Finger Prick": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "FINGER_PRICK"
                    }
                  ]
                }
              }
            }
          },
          "Wash": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "WASH"
                }
              ]
            }
          },
          "Washout Tear Collection": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "WASHOUT"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "collection protocol",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name and version of a particular protocol used for sampling.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Free text.",
        "examples": "BCRonaSamplingProtocol v. 1.2"
      },
      {
        "identifier": "",
        "name": "specimen processing",
        "dataType": "multiple",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Any processing applied to the sample during or after receiving the sample.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "Critical for interpreting data. Select all the applicable processes from the pick list. If virus was passaged, include information in \"lab host\", \"passage number\", and \"passage method\" fields. If none of the processes in the pick list apply, put \"not applicable\".",
        "examples": "Virus passage",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ]
        },
        "itemList": {
          "Virus passage": {},
          "RNA re-extraction (post RT-PCR)": {},
          "Specimens pooled": {}
        }
      },
      {
        "identifier": "",
        "name": "lab host",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Name and description of the laboratory host used to propagate the source organism or material from which the sample was obtained.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "Type of cell line used for propagation. Provide the name of the cell line using the picklist in the template. If not passaged, put \"not applicable\".",
        "examples": "Vero E6 cell line",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "lab_host"
            }
          ]
        },
        "itemList": {
          "293/ACE2 cell line": {},
          "Caco2 cell line": {},
          "Calu3 cell line": {},
          "EFK3B cell line": {},
          "HEK293T cell line": {},
          "HRCE cell line": {},
          "Huh7 cell line": {},
          "LLCMk2 cell line": {},
          "MDBK cell line": {},
          "Mv1Lu cell line": {},
          "NHBE cell line": {},
          "PK-15 cell line": {},
          "RK-13 cell line": {},
          "U251 cell line": {},
          "Vero cell line": {},
          "Vero E6 cell line": {},
          "VeroE6/TMPRSS2 cell line": {}
        }
      },
      {
        "identifier": "",
        "name": "passage number",
        "dataType": "xs:nonNegativeInteger",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Number of passages.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "Provide number of known passages. If not passaged, put \"not applicable\"",
        "examples": "3",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "passage_history"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "passage method",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Description of how organism was passaged.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "Free text. Provide a very short description (<10 words). If not passaged, put \"not applicable\".",
        "examples": "",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "passage_method"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "biomaterial extracted",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The biomaterial extracted from samples for the purpose of sequencing.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the biomaterial extracted from the picklist in the template.",
        "examples": "RNA (total)",
        "itemList": {
          "RNA (total)": {},
          "RNA (poly-A)": {},
          "RNA (ribo-depleted)": {},
          "mRNA (messenger RNA)": {},
          "mRNA (cDNA)": {}
        }
      }
    ]
  },
  {
    "name": "Host Information",
    "children": [
      {
        "identifier": "",
        "name": "host (common name)",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The commonly used name of the host.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Common name or scientific name are required if there was a host. Both can be provided, if known. Use terms from the pick lists in the template. Common name e.g. human, bat. If the sample was environmental, put \"not applicable.",
        "examples": "Human",
        "exportField": {
          "CNPHI": [
            {
              "field": "Animal Type"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_ANIMAL_TYPE"
            }
          ]
        },
        "itemList": {
          "Human": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HUMAN"
                }
              ]
            }
          },
          "Bat": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "BAT"
                }
              ]
            }
          },
          "Cat": {},
          "Chicken": {},
          "Civets": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CIVETS"
                }
              ]
            }
          },
          "Cow": {
            "exportField": {
              "CNPHI": [
                {
                  "value": "bovine"
                }
              ]
            }
          },
          "Dog": {},
          "Lion": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LION"
                }
              ]
            }
          },
          "Mink": {},
          "Pangolin": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PANGOLIN"
                }
              ]
            }
          },
          "Pig": {
            "exportField": {
              "CNPHI": [
                {
                  "value": "porcine"
                }
              ]
            }
          },
          "Pigeon": {},
          "Tiger": {}
        }
      },
      {
        "identifier": "",
        "name": "host (scientific name)",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The taxonomic, or scientific name of the host.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Common name or scientific name are required if there was a host. Both can be provided, if known. Use terms from the pick lists in the template. Scientific name e.g. Homo sapiens, If the sample was environmental, put \"not applicable",
        "examples": "Homo sapiens",
        "exportField": {
          "GISAID": [
            {
              "field": "Host"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "host"
            }
          ]
        },
        "itemList": {
          "Homo sapiens": {},
          "Bos taurus": {},
          "Canis lupus familiaris": {},
          "Chiroptera": {},
          "Columbidae": {},
          "Felis catus": {},
          "Gallus gallus": {},
          "Manis": {},
          "Manis javanica": {},
          "Neovison vison": {},
          "Panthera leo": {},
          "Panthera tigris": {},
          "Rhinolophidae": {},
          "Rhinolophus affinis": {},
          "Sus scrofa domesticus": {},
          "Viverridae": {}
        }
      },
      {
        "identifier": "",
        "name": "host health state",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Health status of the host at the time of sample collection.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "If known, select a descriptor from the pick list provided in the template.",
        "examples": "Symptomatic",
        "exportField": {
          "GISAID": [
            {
              "field": "Patient status"
            }
          ],
          "CNPHI": [
            {
              "field": "Host Health State"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_HOST_HEALTH"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "host_health_state"
            }
          ]
        },
        "itemList": {
          "Asymptomatic": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ASYMPTOMATIC"
                }
              ]
            }
          },
          "Deceased": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "DECEASED"
                }
              ]
            }
          },
          "Healthy": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HEALTHY"
                }
              ]
            }
          },
          "Recovered": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "RECOVERED"
                }
              ]
            }
          },
          "Symptomatic": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SYMPTOMATIC"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "host health status details",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Further details pertaining to the health or disease status of the host at time of collection.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "If known, select a descriptor from the pick list provided in the template.",
        "examples": "Hospitalized (ICU)",
        "exportField": {
          "CNPHI": [
            {
              "field": "Host Health State Details"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_HOST_HEALTH_DETAILS"
            }
          ]
        },
        "itemList": {
          "Hospitalized": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HOSPITALIZED"
                }
              ]
            },
            "itemList": {
              "Hospitalized (Non-ICU)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "NON_ICU"
                    }
                  ]
                }
              },
              "Hospitalized (ICU)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "ICU"
                    }
                  ]
                }
              }
            }
          },
          "Mechanical Ventilation": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "VENTILATION"
                }
              ]
            }
          },
          "Medically Isolated": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ISOLATED"
                }
              ]
            },
            "itemList": {
              "Medically Isolated (Negative Pressure)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "ISOLATED_NEGATIVE_PR"
                    }
                  ]
                }
              }
            }
          },
          "Self-quarantining": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SELF_QUARANTINING"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "host health outcome",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Disease outcome in the host.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "If known, select a descriptor from the pick list provided in the template.",
        "examples": "Recovered",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "host_disease_outcome"
            }
          ]
        },
        "itemList": {
          "Deceased": {},
          "Deteriorating": {},
          "Recovered": {},
          "Stable": {}
        }
      },
      {
        "identifier": "",
        "name": "host disease",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The name of the disease experienced by the host.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Select \"COVID-19\" from the pick list provided in the template.",
        "examples": "COVID-19",
        "exportField": {
          "CNPHI": [
            {
              "field": "Host Disease"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_HOST_DISEASE"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "host_disease"
            }
          ]
        },
        "itemList": {
          "COVID-19": {}
        }
      },
      {
        "identifier": "",
        "name": "host age",
        "dataType": "xs:decimal",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "0",
        "maxValue": "130",
        "description": "Age of host at the time of sampling.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Enter the age of the host in years. If not available, provide a null value. If there is not host, put \"Not Applicable\".",
        "examples": "79",
        "exportField": {
          "GISAID": [
            {
              "field": "Patient age"
            }
          ],
          "CNPHI": [
            {
              "field": "Patient Age"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_AGE"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "host_age"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "host age unit",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The unit used to measure the host age, in either months or years.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Indicate whether the host age is in months or years. Age indicated in months will be binned to the 0 - 9 year age bin. ",
        "examples": "",
        "exportField": {
          "CNPHI": [
            {
              "field": "Age Units"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_AGE_UNIT"
            }
          ]
        },
        "itemList": {
          "month": {},
          "year": {}
        }
      },
      {
        "identifier": "",
        "name": "host age bin",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Age of host at the time of sampling, expressed as an age group.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Select the corresponding host age bin from the pick list provided in the template. If not available, provide a null value.",
        "examples": "60 - 69",
        "exportField": {
          "CNPHI": [
            {
              "field": "Host Age Category"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_AGE_GROUP"
            }
          ]
        },
        "itemList": {
          "0 - 9": {},
          "10 - 19": {},
          "20 - 29": {},
          "30 - 39": {},
          "40 - 49": {},
          "50 - 59": {},
          "60 - 69": {},
          "70 - 79": {},
          "80 - 89": {},
          "90 - 99": {},
          "100+": {}
        }
      },
      {
        "identifier": "",
        "name": "host gender",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The gender of the host at the time of sample collection.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Select the corresponding host gender from the pick list provided in the template. If not available, provide a null value. If there is no host, put \"Not Applicable\".",
        "examples": "male",
        "exportField": {
          "GISAID": [
            {
              "field": "Gender"
            }
          ],
          "CNPHI": [
            {
              "field": "Patient Sex"
            }
          ],
          "NML_LIMS": [
            {
              "field": "VD_SEX"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "host_sex"
            }
          ]
        },
        "itemList": {
          "Female": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FEMALE"
                }
              ]
            }
          },
          "Male": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "MALE"
                }
              ]
            }
          },
          "Non-binary gender": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NON_BINARY_GENDER"
                }
              ]
            }
          },
          "Transgender (Male to Female)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "TRANSGENDER"
                }
              ]
            }
          },
          "Transgender (Female to Male)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "TRANSGENDER"
                }
              ]
            }
          },
          "Undeclared": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "REFUSED"
                }
              ]
            }
          },
          "Unknown": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "UNKNOWN"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "host residence geo_loc name (country)",
        "dataType": "select",
        "isBasedOn": "geo_loc_name (country)",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The country of residence of the host.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select the country name from pick list provided in the template.",
        "examples": "United Kingdom",
        "itemList": {}
      },
      {
        "identifier": "",
        "name": "host residence geo_loc name (state/province/territory)",
        "dataType": "select",
        "isBasedOn": "geo_loc_name (state/province/territory)",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The state/province/territory of residence of the host.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select the province/territory name from pick list provided in the template.",
        "examples": "Quebec",
        "itemList": {}
      },
      {
        "identifier": "",
        "name": "host subject ID",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "A unique identifier by which each host can be referred to e.g. #131",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the host identifier. Should be a unique, user-defined identifier.",
        "examples": "BCxy123",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "host_subject_id"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "symptom onset date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The date on which the symptoms began or were first noted.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "ISO 8601 standard \"YYYY-MM-DD\".",
        "examples": "2020-03-16",
        "exportField": {
          "CNPHI": [
            {
              "field": "Symptoms Onset Date"
            }
          ],
          "NML_LIMS": [
            {
              "field": "HC_ONSET_DATE"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "signs and symptoms",
        "dataType": "multiple",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "A perceived change in function or sensation, (loss, disturbance or appearance) indicative of a disease, reported by a patient or clinician.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select all of the symptoms experienced by the host from the pick list.",
        "examples": "Chills (sudden cold sensation); Cough; Fever",
        "exportField": {
          "CNPHI": [
            {
              "field": "Symptoms"
            }
          ],
          "NML_LIMS": [
            {
              "field": "HC_SYMPTOMS"
            }
          ]
        },
        "itemList": {
          "Abnormal lung auscultation": {},
          "Abnormality of taste sensation": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SENSE_OF_TASTE"
                }
              ]
            },
            "itemList": {
              "Ageusia (complete loss of taste)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "AGEUSIA"
                    }
                  ]
                }
              },
              "Parageusia (distorted sense of taste)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "PARAGEUSIA"
                    }
                  ]
                }
              },
              "Hypogeusia (reduced sense of taste)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "HYPOGEUSIA"
                    }
                  ]
                }
              }
            }
          },
          "Abnormality of the sense of smell": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SENSE_OF_SMELL"
                }
              ]
            },
            "itemList": {
              "Anosmia (lost sense of smell)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "ANOSMIA"
                    }
                  ]
                }
              },
              "Hyposmia (reduced sense of smell)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "HYPOSMIA"
                    }
                  ]
                }
              }
            }
          },
          "Acute Respiratory Distress Syndrome": {
            "exportField": {
              "CNPHI": [
                {
                  "value": "ARDS"
                }
              ]
            }
          },
          "Altered mental status": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ALTERED_CONSCIOUS"
                }
              ]
            },
            "itemList": {
              "Cognitive impairment": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "COGNITIVE"
                    }
                  ]
                }
              },
              "Coma": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "COMA"
                    }
                  ]
                }
              },
              "Confusion": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "CONFUSION"
                    }
                  ]
                },
                "itemList": {
                  "Delirium (sudden severe confusion)": {
                    "exportField": {
                      "NML_LIMS": [
                        {
                          "value": "DELIRIUM"
                        }
                      ]
                    }
                  }
                }
              },
              "Inability to arouse (inability to stay awake)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "INABILITY_AWAKE"
                    }
                  ]
                }
              },
              "Irritability": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "IRRITABILITY"
                    }
                  ]
                }
              },
              "Loss of speech": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "LOSS_OF_SPEECH"
                    }
                  ]
                }
              }
            }
          },
          "Arrhythmia": {},
          "Asthenia (generalized weakness)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "ASTHENIA"
                }
              ]
            }
          },
          "Chest tightness or pressure": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CHEST_TIGHT"
                }
              ]
            },
            "itemList": {
              "Rigors (fever shakes)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "RIGORS"
                    }
                  ]
                }
              }
            }
          },
          "Chills (sudden cold sensation)": {
            "exportField": {
              "CNPHI": [
                {
                  "value": "Chills"
                }
              ],
              "NML_LIMS": [
                {
                  "value": "CHILLS"
                }
              ]
            }
          },
          "Conjunctival injection": {},
          "Conjunctivitis (pink eye)": {
            "exportField": {
              "CNPHI": [
                {
                  "value": "Conjunctivitis"
                }
              ],
              "NML_LIMS": [
                {
                  "value": "CONJUNCTIVITIS"
                }
              ]
            }
          },
          "Coryza": {},
          "Cough": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "COUGH"
                }
              ]
            },
            "itemList": {
              "Nonproductive cough (dry cough)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "NONPRODUCT_COUGH"
                    }
                  ]
                }
              },
              "Productive cough (wet cough)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "PRODUCTIVE_COUGH"
                    }
                  ]
                }
              }
            }
          },
          "Cyanosis (blueish skin discolouration)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "CYANOSIS"
                }
              ]
            },
            "itemList": {
              "Acrocyanosis": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "ACROCYANOS"
                    }
                  ]
                },
                "itemList": {
                  "Circumoral cyanosis (bluish around mouth)": {
                    "exportField": {
                      "NML_LIMS": [
                        {
                          "value": "CIRCUMORAL_CYANOSIS"
                        }
                      ]
                    }
                  },
                  "Cyanotic face (bluish face)": {
                    "exportField": {
                      "NML_LIMS": [
                        {
                          "value": "CYANOTIC_FACE"
                        }
                      ]
                    }
                  }
                }
              },
              "Central Cyanosis": {
                "itemList": {
                  "Cyanotic lips (bluish lips)": {
                    "exportField": {
                      "NML_LIMS": [
                        {
                          "value": "CYANOTIC_LIPS"
                        }
                      ]
                    }
                  }
                }
              },
              "Peripheral Cyanosis": {}
            }
          },
          "Dyspnea (breathing difficulty)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "DYSPNEA"
                }
              ]
            }
          },
          "Diarrhea (watery stool)": {
            "exportField": {
              "CNPHI": [
                {
                  "value": "Diarrhea, watery"
                }
              ],
              "NML_LIMS": [
                {
                  "value": "DIARRHEA"
                }
              ]
            }
          },
          "Dry gangrene": {},
          "Encephalitis (brain inflammation)": {
            "exportField": {
              "CNPHI": [
                {
                  "value": "Encephalitis"
                }
              ],
              "NML_LIMS": [
                {
                  "value": "ENCEPHALITIS"
                }
              ]
            }
          },
          "Encephalopathy": {},
          "Fatigue (tiredness)": {
            "exportField": {
              "CNPHI": [
                {
                  "value": "Fatigue"
                }
              ],
              "NML_LIMS": [
                {
                  "value": "FATIGUE"
                }
              ]
            }
          },
          "Fever": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "FEVER"
                }
              ]
            },
            "itemList": {
              "Fever (>=38\u00b0C)": {
                "exportField": {
                  "CNPHI": [
                    {
                      "value": "Fever"
                    }
                  ]
                }
              }
            }
          },
          "Glossitis (inflammation of the tongue)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "GLOSSITIS"
                }
              ]
            }
          },
          "Ground Glass Opacities (GGO)": {},
          "Headache": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HEADACHE"
                }
              ]
            }
          },
          "Hemoptysis (coughing up blood)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HEMOPTYSIS"
                }
              ]
            }
          },
          "Hypocapnia": {},
          "Hypotension (low blood pressure)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HYPOTENSION"
                }
              ]
            }
          },
          "Hypoxemia (low blood oxygen)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "HYPOXEMIA"
                }
              ]
            },
            "itemList": {
              "Silent hypoxemia": {}
            }
          },
          "Internal hemorrhage (internal bleeding)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "INTERNAL_HEMORRHAGE"
                }
              ]
            }
          },
          "Loss of Fine Movements": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LOSS_OF_FINE_MOVE"
                }
              ]
            }
          },
          "Low appetite": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "LOW_APPETITE"
                }
              ]
            }
          },
          "Malaise (general discomfort/unease)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "MALAISE"
                }
              ]
            }
          },
          "Meningismus/nuchal rigidity": {},
          "Muscle weakness": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "MUSCLE_WEAK"
                }
              ]
            }
          },
          "Nasal obstruction (stuffy nose)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NASAL_OBSTRUCT"
                }
              ]
            }
          },
          "Nausea": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "NAUSEA"
                }
              ]
            }
          },
          "Nose bleed": {},
          "Otitis": {},
          "Pain": {
            "itemList": {
              "Abdominal pain": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "ABDOMINAL"
                    }
                  ]
                }
              },
              "Arthralgia (painful joints)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "ARTHRALGIA"
                    }
                  ]
                }
              },
              "Chest pain": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "CHEST_PAIN"
                    }
                  ]
                },
                "itemList": {
                  "Pleuritic chest pain": {}
                }
              },
              "Myalgia (muscle pain)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "MYALGIA"
                    }
                  ]
                }
              }
            }
          },
          "Pharyngitis (sore throat)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "PHARYNGITIS"
                }
              ]
            }
          },
          "Pharyngeal exudate": {},
          "Pleural effusion": {},
          "Pneumonia": {},
          "Prostration": {},
          "Pseudo-chilblains": {
            "itemList": {
              "Pseudo-chilblains on fingers (covid fingers)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "PSEUDO-CHIBLAINS_F"
                    }
                  ]
                }
              },
              "Pseudo-chilblains on toes (covid toes)": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "PSEUDO-CHIBLAINS_T"
                    }
                  ]
                }
              }
            }
          },
          "Rash": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "RASH"
                }
              ]
            }
          },
          "Rhinorrhea (runny nose)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "RHINORRHEA"
                }
              ]
            }
          },
          "Seizure": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SEIZURE"
                }
              ]
            },
            "itemList": {
              "Motor seizure": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "MOTOR_SEIZURE"
                    }
                  ]
                }
              }
            }
          },
          "Shivering (involuntary muscle twitching)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SHIVERING"
                }
              ]
            }
          },
          "Slurred speech": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SLURRED_SPEECH"
                }
              ]
            }
          },
          "Sneezing": {},
          "Sputum Production": {},
          "Stroke": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "STROKE"
                }
              ]
            }
          },
          "Swollen Lymph Nodes": {},
          "Tachypnea (accelerated respiratory rate)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "TACHYPNEA"
                }
              ]
            }
          },
          "Vertigo (dizziness)": {},
          "Vomiting (throwing up)": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "VOMITING"
                }
              ]
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "pre-existing conditions and risk factors",
        "dataType": "multiple",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Patient pre-existing conditions and risk factors. <li>Pre-existing condition: A medical condition that existed prior to the current infection. <li>Risk Factor: A variable associated with an increased risk of disease or infection.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select all of the pre-existing conditions and risk factors experienced by the host from the pick list. If the desired term is missing, contact the curation team.",
        "examples": "Asthma; Pregnancy; Smoking",
        "itemList": {
          "Age 60+": {},
          "Anemia": {},
          "Anorexia": {},
          "Birthing labor": {},
          "Bone marrow failure": {},
          "Cancer": {
            "itemList": {
              "Breast cancer": {},
              "Colorectal cancer": {},
              "Hematologic malignancy": {},
              "Lung cancer": {},
              "Metastatic disease": {}
            }
          },
          "Cancer treatment": {
            "itemList": {
              "Cancer surgery": {},
              "Chemotherapy": {
                "itemList": {
                  "Adjuvant chemotherapy": {}
                }
              }
            }
          },
          "Cardiac disorder": {
            "itemList": {
              "Arrhythmia": {},
              "Cardiac disease": {},
              "Cardiomyopathy": {},
              "Cardiac injury": {},
              "Hypertension (high blood pressure)": {},
              "Hypotension (low blood pressure)": {}
            }
          },
          "Cesarean section": {},
          "Chronic cough": {},
          "Chronic gastrointestinal disease": {},
          "Chronic lung disease": {},
          "Corticosteroids": {},
          "Diabetes mellitus (diabetes)": {
            "itemList": {
              "Type I diabetes mellitus (T1D)": {},
              "Type II diabetes mellitus (T2D)": {}
            }
          },
          "Eczema": {},
          "Electrolyte disturbance": {
            "itemList": {
              "Hypocalcemia": {},
              "Hypokalemia": {},
              "Hypomagnesemia": {}
            }
          },
          "Encephalitis (brain inflammation)": {},
          "Epilepsy": {},
          "Hemodialysis": {},
          "Hemoglobinopathy": {},
          "Human immunodeficiency virus (HIV)": {
            "itemList": {
              "Acquired immunodeficiency syndrome (AIDS)": {},
              "HIV and antiretroviral therapy (ART)": {}
            }
          },
          "Immunocompromised": {
            "itemList": {
              "Lupus": {}
            }
          },
          "Inflammatory bowel disease (IBD)": {
            "itemList": {
              "Colitis": {
                "itemList": {
                  "Ulcerative colitis": {}
                }
              },
              "Crohn's disease": {}
            }
          },
          "Renal disorder": {
            "itemList": {
              "Renal disease": {},
              "Chronic renal disease": {},
              "Renal failure": {}
            }
          },
          "Liver disease": {
            "itemList": {
              "Chronic liver disease": {
                "itemList": {
                  "Fatty liver disease (FLD)": {}
                }
              }
            }
          },
          "Myalgia (muscle pain)": {},
          "Myalgic encephalomyelitis (ME)": {},
          "Neurological disorder": {
            "itemList": {
              "Neuromuscular disorder": {}
            }
          },
          "Obesity": {
            "itemList": {
              "Severe obesity": {}
            }
          },
          "Respiratory disorder": {
            "itemList": {
              "Asthma": {},
              "Chronic bronchitis": {},
              "Chronic pulmonary disease": {
                "itemList": {
                  "Chronic obstructive pulmonary disease": {}
                }
              },
              "Emphysema": {},
              "Lung disease": {
                "itemList": {
                  "Chronic lung disease": {},
                  "Pulmonary fibrosis": {}
                }
              },
              "Pneumonia": {},
              "Respiratory failure": {
                "itemList": {
                  "Adult respiratory distress syndrome": {},
                  "Newborn respiratory distress syndrome": {}
                }
              },
              "Tuberculosis": {}
            }
          },
          "Postpartum (\u22646 weeks)": {},
          "Pregnancy": {},
          "Rheumatic disease": {},
          "Sickle cell disease": {},
          "Substance use": {
            "itemList": {
              "Alcohol abuse": {},
              "Drug abuse": {
                "itemList": {
                  "Injection drug abuse": {}
                }
              },
              "Smoking": {},
              "Vaping": {}
            }
          },
          "Tachypnea (accelerated respiratory rate)": {},
          "Transplant": {
            "itemList": {
              "Bone marrow transplant": {},
              "Cardiac transplant": {},
              "Hematopoietic stem cell transplant (HSCT)": {},
              "Kidney transplant": {},
              "Liver transplant": {}
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "complications",
        "dataType": "multiple",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Patient medical complications that are believed to have occurred as a result of host disease.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select all of the complications experienced by the host from the pick list. If the desired term is missing, contact the curation team.",
        "examples": "Acute Respiratory Failure; Coma; Septicemia",
        "itemList": {
          "Abnormal blood oxygen level": {},
          "Acute respiratory failure": {},
          "Arrhythmia (complication)": {
            "itemList": {
              "Tachycardia": {
                "itemList": {
                  "Polymorphic ventricular tachycardia (VT)": {},
                  "Tachyarrhythmia": {}
                }
              }
            }
          },
          "Noncardiogenic pulmonary edema": {
            "itemList": {
              "Acute respiratory distress syndrome (ARDS)": {
                "itemList": {
                  "COVID-19 associated ARDS (CARDS)": {},
                  "Neurogenic pulmonary edema (NPE)": {}
                }
              }
            }
          },
          "Cardiac injury": {},
          "Cardiac arrest": {},
          "Cardiogenic shock": {},
          "Blood clot": {
            "itemList": {
              "Arterial clot": {},
              "Deep vein thrombosis (DVT)": {},
              "Pulmonary embolism (PE)": {}
            }
          },
          "Cardiomyopathy": {},
          "Central nervous system invasion": {},
          "Stroke (complication)": {
            "itemList": {
              "Central Nervous System Vasculitis": {},
              "Ischemic stroke": {
                "itemList": {
                  "Acute ischemic stroke": {}
                }
              }
            }
          },
          "Coma": {},
          "Convulsions": {},
          "COVID-19 associated coagulopathy (CAC)": {},
          "Cystic fibrosis": {},
          "Cytokine release syndrome": {},
          "Disseminated intravascular coagulation (DIC)": {},
          "Encephalopathy": {},
          "Fulminant myocarditis": {},
          "Guillain-Barr\u00e9 syndrome": {},
          "Internal hemorrhage (complication; internal bleeding)": {
            "itemList": {
              "Intracerebral haemorrhage": {}
            }
          },
          "Kawasaki disease": {
            "itemList": {
              "Typical Kawasaki disease": {},
              "Incomplete Kawasaki disease": {}
            }
          },
          "Kidney injury": {
            "itemList": {
              "Acute kidney injury": {}
            }
          },
          "Liver dysfunction": {},
          "Liver injury": {
            "itemList": {
              "Acute liver injury": {}
            }
          },
          "Lung injury": {
            "itemList": {
              "Acute lung injury": {}
            }
          },
          "Meningitis": {},
          "Migraine": {},
          "Miscarriage": {},
          "Multisystem inflammatory syndrome in children (MIS-C)": {},
          "Muscle injury": {},
          "Myalgic encephalomyelitis (ME)": {},
          "Myocardial infarction (heart attack)": {
            "itemList": {
              "Acute myocardial infarction": {},
              "Elevation myocardial infarction": {},
              "ST-segment elevation myocardial infarction": {}
            }
          },
          "Myocardial injury": {},
          "Neonatal complications": {},
          "Organ failure": {
            "itemList": {
              "Heart failure": {},
              "Liver failure": {}
            }
          },
          "Paralysis": {},
          "Pneumothorax (collapsed lung)": {
            "itemList": {
              "Spontaneous pneumothorax": {},
              "Spontaneous tension pneymothorax": {}
            }
          },
          "Pneumonia (complication)": {
            "itemList": {
              "COVID-19 pneumonia": {}
            }
          },
          "Pregancy complications": {},
          "Rhabdomyolysis": {},
          "Secondary infection": {
            "itemList": {
              "Secondary staph infection": {},
              "Secondary strep infection": {}
            }
          },
          "Seizure (complication)": {
            "itemList": {
              "Motor seizure": {}
            }
          },
          "Sepsis": {},
          "Septicemia": {},
          "Shock": {
            "itemList": {
              "Hyperinflammatory shock": {},
              "Refractory cardiogenic shock": {},
              "Refractory cardiogenic plus vasoplegic shock": {},
              "Septic shock": {}
            }
          },
          "Vasculitis": {},
          "Ventilation induced lung injury (VILI)": {}
        }
      }
    ]
  },
  {
    "name": "Host vaccination information",
    "children": [
      {
        "identifier": "",
        "name": "host vaccination status",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The vaccination status of the host (fully vaccinated, partially vaccinated, or not vaccinated).",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select the vaccination status of the host from the pick list.",
        "examples": "Fully Vaccinated",
        "itemList": {
          "Fully Vaccinated": {},
          "Partially Vaccinated": {},
          "Not Vaccinated": {}
        }
      },
      {
        "identifier": "",
        "name": "vaccine name",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of the vaccine.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Free text. Provide the name of the vaccine.",
        "examples": "Pfizer-BioNTech COVID-19 vaccine"
      },
      {
        "identifier": "",
        "name": "number of vaccine doses received",
        "dataType": "xs:nonNegativeInteger",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The number of doses of the vaccine recived by the host.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Record how many doses of the vaccine the host has received.",
        "examples": "2"
      },
      {
        "identifier": "",
        "name": "first dose vaccination date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The date the host was first vaccinated.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the vaccination date in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2021-02-26"
      },
      {
        "identifier": "",
        "name": "last dose vaccination date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The date the host received their last dose of vaccine.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the date that the last dose of the vaccine was administered. Provide the last dose vaccination date in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2021-04-09"
      }
    ]
  },
  {
    "name": "Host exposure information",
    "children": [
      {
        "identifier": "",
        "name": "location of exposure geo_loc name (country)",
        "dataType": "select",
        "isBasedOn": "geo_loc_name (country)",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The country where the host was likely exposed to the causative agent of the illness.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select the country name from pick list provided in the template.",
        "examples": "Canada",
        "itemList": {}
      },
      {
        "identifier": "",
        "name": "destination of most recent travel (city)",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of the city that was the destination of most recent travel.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name of the city that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "New York City",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_TRAVEL"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "destination of most recent travel (state/province/territory)",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of the province that was the destination of most recent travel.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name of the state/province/territory that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "California",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_TRAVEL"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "destination of most recent travel (country)",
        "dataType": "select",
        "isBasedOn": "geo_loc_name (country)",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The name of the country that was the destination of most recent travel.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name of the country that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "United Kingdom",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_TRAVEL"
            }
          ]
        },
        "itemList": {}
      },
      {
        "identifier": "",
        "name": "most recent travel departure date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The date of a person's most recent departure from their primary residence (at that time) on a journey to one or more other locations.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the travel departure date.",
        "examples": "2020-03-16",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_TRAVEL"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "most recent travel return date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The date of a person's most recent return to some residence from a journey originating at that residence.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the travel return date.",
        "examples": "2020-04-26",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_TRAVEL"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "travel history",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "Travel history in last six months.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Specify the countries (and more granular locations if known, separated by a comma) travelled in the last six months; can include multiple travels. Separate multiple travel events with a semi-colon. List most recent travel first.",
        "examples": "Canada, Vancouver; USA, Seattle; Italy, Milan"
      },
      {
        "identifier": "",
        "name": "exposure event",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Event leading to exposure.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select an exposure event from the pick list provided in the template. If the desired term is missing, contact the curation team.",
        "examples": "Convention",
        "exportField": {
          "GISAID": [
            {
              "field": "Additional location information"
            }
          ],
          "CNPHI": [
            {
              "field": "Exposure Event"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_EXPOSURE"
            }
          ]
        },
        "itemList": {
          "Mass Gathering": {
            "itemList": {
              "Convention": {
                "exportField": {
                  "NML_LIMS": [
                    {
                      "value": "CONVENTION"
                    }
                  ]
                }
              },
              "Convocation": {},
              "Agricultural Event": {}
            }
          },
          "Religious Gathering": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "RELIGIOUS"
                }
              ]
            },
            "itemList": {
              "Mass": {}
            }
          },
          "Social Gathering": {
            "exportField": {
              "NML_LIMS": [
                {
                  "value": "SOCIAL"
                }
              ]
            },
            "itemList": {
              "Baby Shower": {},
              "Community Event": {},
              "Family Gathering": {
                "itemList": {
                  "Family Reunion": {}
                }
              },
              "Funeral": {},
              "Party": {},
              "Potluck": {},
              "Wedding": {}
            }
          },
          "Other exposure event": {}
        }
      },
      {
        "identifier": "",
        "name": "exposure contact level",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The exposure transmission contact type.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select direct or indirect exposure from the pick-list.",
        "examples": "Direct",
        "itemList": {
          "Contact with infected individual": {
            "itemList": {
              "Direct contact (direct human-to-human contact)": {},
              "Indirect contact": {
                "itemList": {
                  "Close contact (face-to-face, no direct contact)": {},
                  "Casual contact": {}
                }
              }
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "host role",
        "dataType": "multiple",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The role of the host in relation to the exposure setting.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select the host's personal role(s) from the pick list provided in the template. If the desired term is missing, contact the curation team.",
        "examples": "Patient",
        "itemList": {
          "Attendee": {
            "itemList": {
              "Student": {}
            }
          },
          "Patient": {
            "itemList": {
              "Inpatient": {},
              "Outpatient": {}
            }
          },
          "Passenger": {},
          "Resident": {},
          "Visitor": {},
          "Volunteer": {},
          "Work": {
            "itemList": {
              "Administrator": {},
              "First Responder": {
                "itemList": {
                  "Firefighter": {},
                  "Paramedic": {},
                  "Police Officer": {}
                }
              },
              "Healthcare Worker": {},
              "Nurse": {},
              "Personal Care Aid": {},
              "Pharmacist": {},
              "Physician": {},
              "Housekeeper": {},
              "Kitchen Worker": {},
              "Laboratory Worker": {},
              "Rotational Worker": {},
              "Seasonal Worker": {},
              "Veterinarian": {}
            }
          },
          "Social role": {
            "itemList": {
              "Acquaintance of case": {},
              "Relative of case": {
                "itemList": {
                  "Child of case": {},
                  "Parent of case": {},
                  "Father of case": {},
                  "Mother of case": {}
                }
              },
              "Spouse of case": {}
            }
          },
          "Other Host Role": {}
        }
      },
      {
        "identifier": "",
        "name": "exposure setting",
        "dataType": "multiple",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The setting leading to exposure.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select the host exposure setting(s) from the pick list provided in the template. If a desired term is missing, contact the curation team.",
        "examples": "Healthcare Setting",
        "itemList": {
          "Human Exposure": {
            "itemList": {
              "Known COVID-19 Case": {},
              "Patient Contact": {},
              "Probable COVID-19 Case": {},
              "Person with Acute Respiratory Illness": {},
              "Person with Fever and/or Cough": {},
              "Person who Recently Travelled": {}
            }
          },
          "Occupational or Residency Exposure": {
            "itemList": {
              "Abbatoir": {},
              "Animal Rescue": {},
              "Childcare": {
                "itemList": {
                  "Daycare": {}
                }
              },
              "Funeral Home": {},
              "Place of Worship": {
                "itemList": {
                  "Church": {},
                  "Mosque": {},
                  "Temple": {}
                }
              },
              "Nursery": {},
              "Household": {},
              "Community Service Centre": {},
              "Correctional Facility": {},
              "Dormitory": {},
              "Farm": {},
              "First Nations Reserve": {},
              "Group Home": {},
              "Healthcare Setting": {
                "itemList": {
                  "Ambulance": {},
                  "Acute Care Facility": {},
                  "Clinic": {},
                  "Community Health Centre": {},
                  "Hospital": {
                    "itemList": {
                      "Emergency Department": {},
                      "ICU": {},
                      "Ward": {}
                    }
                  },
                  "Laboratory": {},
                  "Long-Term Care Facility": {},
                  "Pharmacy": {},
                  "Physician's Office": {}
                }
              },
              "Insecure Housing (Homeless)": {},
              "Office": {},
              "Outdoors": {
                "itemList": {
                  "Camp/camping": {},
                  "Hiking": {},
                  "Hunting": {}
                }
              },
              "Petting zoo": {},
              "Restaurant": {},
              "Retail Store": {},
              "School": {},
              "Temporary Residence": {
                "itemList": {
                  "Homeless Shelter": {},
                  "Hotel": {}
                }
              },
              "Veterinary Care Clinic": {}
            }
          },
          "Travel Exposure": {
            "itemList": {
              "Travelled": {
                "itemList": {
                  "Travelled on a Cruise Ship": {},
                  "Travelled on a Plane": {},
                  "Travelled on Ground Transport": {},
                  "Travelled outside Province/Territory": {},
                  "Travelled outside Canada": {}
                }
              }
            }
          },
          "Other Exposure Setting": {}
        }
      },
      {
        "identifier": "",
        "name": "exposure details",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "Additional host exposure information.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Free text description of the exposure.",
        "examples": "Host role - Other: Bus Driver"
      }
    ]
  },
  {
    "name": "Host reinfection information",
    "children": [
      {
        "identifier": "",
        "name": "prior SARS-CoV-2 infection",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Whether there was prior SARS-CoV-2 infection.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Ik known, provide infromation about whether the individual had a previous SARS-CoV-2 infection. Select a value from the pick list.",
        "examples": "Yes",
        "itemList": {
          "Yes": {},
          "No": {},
          "Unknown": {}
        }
      },
      {
        "identifier": "",
        "name": "prior SARS-CoV-2 infection isolate",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The identifier of the isolate found in the prior SARS-CoV-2 infection.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the isolate name of the most recent prior infection. Structure the \"isolate\" name to be ICTV/INSDC compliant in the following format: \"SARS-CoV-2/host/country/sampleID/date\".",
        "examples": "SARS-CoV-2/human/USA/CA-CDPH-001/2020"
      },
      {
        "identifier": "",
        "name": "prior SARS-CoV-2 infection date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The date of diagnosis of the prior SARS-CoV-2 infection.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the date that the most recent prior infection was diagnosed. Provide the prior SARS-CoV-2 infection date in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2021-01-23"
      },
      {
        "identifier": "",
        "name": "prior SARS-CoV-2 antiviral treatment",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "Whether there was prior SARS-CoV-2 treatment with an antiviral agent.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "If known, provide infromation about whether the individual had a previous SARS-CoV-2 antiviral treatment. Select a value from the pick list.",
        "examples": "No prior antiviral treatment",
        "itemList": {
          "Prior antivrial treatment": {},
          "No prior antivrial treatment": {},
          "Unknown": {}
        }
      },
      {
        "identifier": "",
        "name": "prior SARS-CoV-2 antiviral treatment agent",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of the antiviral treatment agent administered during the prior SARS-CoV-2 infection.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name of the antiviral treatment agent administered during the most recent prior infection. If no treatment was administered, put \"No treatment\". If multiple antiviral agents were administered, list them all separated by commas.",
        "examples": "Remdesivir"
      },
      {
        "identifier": "",
        "name": "prior SARS-CoV-2 antiviral treatment date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The date treatment was first administered during the prior SARS-CoV-2 infection.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the date that the antiviral treatment agent was first administered during the most recenrt prior infection. Provide the prior SARS-CoV-2 treatment date in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2021-01-28"
      }
    ]
  },
  {
    "name": "Sequencing",
    "children": [
      {
        "identifier": "",
        "name": "purpose of sequencing",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The reason that the sample was sequenced.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "The reason why a sample was originally collected may differ from the reason why it was selected for sequencing. The reason a sample was sequenced may provide information about potential biases in sequencing strategy. Provide the purpose of sequencing from the picklist in the template. The reason for sample collection should be indicated in the \"purpose of sampling\" field. ",
        "examples": "Baseline surveillance (random sampling)",
        "exportField": {
          "CNPHI": [
            {
              "field": "Reason for Sequencing"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_REASON_FOR_SEQUENCING"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "purpose_of_sequencing"
            }
          ]
        },
        "itemList": {
          "Baseline surveillance (random sampling)": {},
          "Targeted surveillance (non-random sampling)": {
            "itemList": {
              "Priority surveillance project": {
                "itemList": {
                  "Screening for Variants of Concern (VoC)": {},
                  "Longitudinal surveillance (repeat sampling of individuals)": {},
                  "Re-infection surveillance": {},
                  "Vaccine escape surveillance": {},
                  "Travel-associated surveillance": {
                    "itemList": {
                      "Domestic travel surveillance": {},
                      "International travel surveillance": {}
                    }
                  }
                }
              }
            }
          },
          "Cluster/Outbreak investigation": {
            "itemList": {
              "Multi-jurisdictional outbreak investigation": {},
              "Intra-jurisdictional outbreak investigation": {}
            }
          },
          "Research": {
            "itemList": {
              "Viral passage experiment": {},
              "Protocol testing experiment": {}
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "purpose of sequencing details",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The description of why the sample was sequenced providing specific details.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide an expanded description of why the sample was sequenced using free text. The description may include the importance of the sequences for a particular public health investigation/surveillance activity/research question. Suggested standardized descriotions include: Screened for S gene target failure (S dropout), Screened for mink variants, Screened for B.1.1.7 variant, Screened for B.1.135 variant, Screened for P.1 variant, Screened due to travel history, Screened due to close contact with infected individual, Assessing public health control measures, Determining early introductions and spread, Investigating airline-related exposures, Investigating temporary foreign worker, Investigating remote regions, Investigating health care workers, Investigating schools/universities, Investigating reinfection.",
        "examples": "Screened for S gene target failure (S dropout)",
        "exportField": {
          "CNPHI": [
            {
              "field": "Details on the Reason for Sequencing"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_REASON_FOR_SEQUENCING_DETAILS"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "sequencing date",
        "dataType": "xs:date",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The date the sample was sequenced.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "ISO 8601 standard \"YYYY-MM-DD\".",
        "examples": "2020-06-22"
      },
      {
        "identifier": "",
        "name": "library ID",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The user-specified identifier for the library prepared for sequencing.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "The library name should be unique, and can be an autogenerated ID from your LIMS, or modification of the isolate ID.",
        "examples": "XYZ_123345"
      },
      {
        "identifier": "",
        "name": "amplicon size",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The length of the amplicon generated by PCR amplification.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the amplicon size, including the units.",
        "examples": "300bp"
      },
      {
        "identifier": "",
        "name": "library preparation kit",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of the DNA library preparation kit used to generate the library being sequenced.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name of the library preparation kit used.",
        "examples": "Nextera XT"
      },
      {
        "identifier": "",
        "name": "flow cell barcode",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The barcode of the flow cell used for sequencing.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the barcode of the flow cell used for sequencing the sample.",
        "examples": "FAB06069"
      },
      {
        "identifier": "",
        "name": "sequencing instrument",
        "dataType": "multiple",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The model of the sequencing instrument used.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Select a sequencing instrument from the picklist provided in the template.",
        "examples": "MinIon",
        "exportField": {
          "GISAID": [
            {
              "field": "Sequencing technology"
            }
          ],
          "CNPHI": [
            {
              "field": "Sequencing Instrument"
            }
          ],
          "NML_LIMS": [
            {
              "field": "ANALYSIS"
            }
          ]
        },
        "itemList": {
          "Illumina": {
            "itemList": {
              "Illumina Genome Analyzer": {
                "itemList": {
                  "Illumina Genome Analyzer II": {},
                  "Illumina Genome Analyzer IIx": {}
                }
              },
              "Illumina HiScanSQ": {},
              "Illumina HiSeq": {},
              "Illumina HiSeq X": {
                "itemList": {
                  "Illumina HiSeq X Five": {},
                  "Illumina HiSeq X Ten": {}
                }
              },
              "Illumina HiSeq 1000": {},
              "Illumina HiSeq 1500": {},
              "Illumina HiSeq 2000": {},
              "Illumina HiSeq 2500": {},
              "Illumina HiSeq 3000": {},
              "Illumina HiSeq 4000": {},
              "Illumina iSeq": {
                "itemList": {
                  "Illumina iSeq 100": {}
                }
              },
              "Illumina NovaSeq": {
                "itemList": {
                  "Illumina NovaSeq 6000": {}
                }
              },
              "Illumina MiniSeq": {},
              "Illumina MiSeq": {},
              "Illumina NextSeq": {},
              "Illumina NextSeq 500": {},
              "Illumina NextSeq 550": {}
            }
          },
          "Pacific Biosciences": {
            "itemList": {
              "PacBio RS": {},
              "PacBio RS II": {},
              "PacBio Sequel": {},
              "PacBio Sequel II": {}
            }
          },
          "Ion Torrent": {
            "itemList": {
              "Ion Torrent PGM": {},
              "Ion Torrent Proton": {},
              "Ion Torrent S5 XL": {},
              "Ion Torrent S5": {}
            }
          },
          "Oxford Nanopore": {
            "itemList": {
              "GridION": {},
              "MinION": {},
              "PromethION": {}
            }
          },
          "BGI Genomics": {
            "itemList": {
              "BGISEQ-500": {}
            }
          },
          "MGI": {
            "itemList": {
              "DNBSEQ-T7": {},
              "DNBSEQ-G400": {},
              "DNBSEQ-G400 FAST": {},
              "DNBSEQ-G50": {}
            }
          }
        }
      },
      {
        "identifier": "",
        "name": "sequencing protocol name",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name and version number of the sequencing protocol used.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "Provide the name and version of the sequencing protocol e.g. 1D_DNA_MinION",
        "examples": "https://www.protocols.io/view/covid-19-artic-v3-illumina-library-construction-an-bibtkann",
        "exportField": {
          "CNPHI": [
            {
              "field": "Sequencing Protocol Name"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "sequencing protocol",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The protocol used to generate the sequence.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide a free text description of the methods and materials used to generate the sequence. Suggested text, fill in information where indicated.: \"Viral sequencing was performed following a tiling amplicon strategy using the <fill in> primer scheme. Sequencing was performed using a <fill in> sequencing instrument. Libraries were prepared using <fill in> library kit. \"",
        "examples": "Genomes were generated through amplicon sequencing of 1200 bp amplicons with Freed schema primers. Libraries were created using Illumina DNA Prep kits, and sequence data was produced using Miseq Micro v2 (500 cycles) sequencing kits.",
        "exportField": {
          "NML_LIMS": [
            {
              "field": "PH_TESTING_PROTOCOL"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "sequencing kit number",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The manufacturer's kit number.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Alphanumeric value.",
        "examples": "AB456XYZ789"
      },
      {
        "identifier": "",
        "name": "amplicon pcr primer scheme",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The specifications of the primers (primer sequences, binding positions, fragment size generated etc) used to generate the amplicons to be sequenced.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name and version of the primer scheme used to generate the amplicons for sequencing.",
        "examples": "https://github.com/joshquick/artic-ncov2019/blob/master/primer_schemes/nCoV-2019/V3/nCoV-2019.tsv"
      }
    ]
  },
  {
    "name": "Bioinformatics and QC metrics",
    "children": [
      {
        "identifier": "",
        "name": "raw sequence data processing method",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The names of the software and version number used for raw data processing such as removing barcodes, adapter trimming, filtering etc.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "Provide the software name followed by the version e.g. Trimmomatic v. 0.38, Porechop v. 0.2.3",
        "examples": "Porechop 0.2.3"
      },
      {
        "identifier": "",
        "name": "dehosting method",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The method used to remove host reads from the pathogen sequence.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name and version number of the software used to remove host reads.",
        "examples": "Nanostripper"
      },
      {
        "identifier": "",
        "name": "consensus sequence name",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of the consensus sequence.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name and version number of the consensus sequence.",
        "examples": "ncov123assembly3"
      },
      {
        "identifier": "",
        "name": "consensus sequence filename",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of the consensus sequence file.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name and version number of the consensus sequence FASTA file.",
        "examples": "ncov123assembly.fasta"
      },
      {
        "identifier": "",
        "name": "consensus sequence filepath",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The filepath of the consesnsus sequence file.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the filepath of the consensus sequence FASTA file.",
        "examples": "/User/Documents/RespLab/Data/ncov123assembly.fasta"
      },
      {
        "identifier": "",
        "name": "consensus sequence software name",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of software used to generate the consensus sequence.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide the name of the software used to generate the consensus sequence.",
        "examples": "Ivar",
        "exportField": {
          "CNPHI": [
            {
              "field": "consensus sequence"
            }
          ],
          "NML_LIMS": [
            {
              "field": "Consensus Sequence Method Name"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "consensus sequence software version",
        "dataType": "xs:decimal",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The version of the software used to generate the consensus sequence.",
        "valueRequired": "required",
        "capitalize": "",
        "guidance": "Provide the version of the software used to generate the consensus sequence.",
        "examples": "1.3",
        "exportField": {
          "CNPHI": [
            {
              "field": "consensus sequence"
            }
          ],
          "NML_LIMS": [
            {
              "field": "Consensus Sequence Method Version Name"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "breadth of coverage value",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The percentage of the reference genome covered by the sequenced data, to a prescribed depth.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide value as a percent.",
        "examples": "95%"
      },
      {
        "identifier": "",
        "name": "depth of coverage value",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The average number of reads representing a given nucleotide in the reconstructed sequence.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide value as a fold of coverage.",
        "examples": "400x",
        "exportField": {
          "GISAID": [
            {
              "field": "Coverage"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "depth of coverage threshold",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The threshold used as a cut-off for the depth of coverage.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the threshold fold coverage.",
        "examples": "100x"
      },
      {
        "identifier": "",
        "name": "r1 fastq filename",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The user-specified filename of the r1 FASTQ file.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "Provide the r1 FASTQ filename.",
        "examples": "ABC123_S1_L001_R1_001.fastq.gz"
      },
      {
        "identifier": "",
        "name": "r2 fastq filename",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The user-specified filename of the r2 FASTQ file.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "Provide the r2 FASTQ filename.",
        "examples": "ABC123_S1_L001_R2_001.fastq.gz"
      },
      {
        "identifier": "",
        "name": "r1 fastq filepath",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The location of the r1 FASTQ file within a user's file system.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the filepath for the r1 FASTQ file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data/ABC123_S1_L001_R1_001.fastq.gz"
      },
      {
        "identifier": "",
        "name": "r2 fastq filepath",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The location of the r2 FASTQ file within a user's file system.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the filepath for the r2 FASTQ file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data/ABC123_S1_L001_R2_001.fastq.gz"
      },
      {
        "identifier": "",
        "name": "fast5 filename",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The user-specified filename of the FAST5 file.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the FAST5 filename.",
        "examples": "rona123assembly.fast5"
      },
      {
        "identifier": "",
        "name": "fast5 filepath",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The location of the FAST5 file within a user's file system.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the filepath for the FAST5 file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data/rona123assembly.fast5"
      },
      {
        "identifier": "",
        "name": "number of base pairs sequenced",
        "dataType": "xs:nonNegativeInteger",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The number of total base pairs generated by the sequencing process.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "387566"
      },
      {
        "identifier": "",
        "name": "consensus genome length",
        "dataType": "xs:nonNegativeInteger",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "Size of the reconstructed genome described as the number of base pairs.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "38677"
      },
      {
        "identifier": "",
        "name": "Ns per 100 kbp",
        "dataType": "xs:decimal",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "0",
        "maxValue": "",
        "description": "The number of N symbols present in the consensus fasta sequence, per 100kbp of sequence.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "330"
      },
      {
        "identifier": "",
        "name": "reference genome accession",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "A persistent, unique identifier of a genome database entry.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the accession number of the reference genome.",
        "examples": "NC_045512.2"
      },
      {
        "identifier": "",
        "name": "bioinformatics protocol",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name and version number of the bioinformatics protocol used.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Further details regarding the methods used to process raw data, and/or generate assemblies, and/or generate consensus sequences can be provided in an SOP or protocol. Provide the name and version number of the protocol.",
        "examples": "https://www.protocols.io/groups/cphln-sarscov2-sequencing-consortium/members",
        "exportField": {
          "CNPHI": [
            {
              "field": "Bioinformatics Protocol"
            }
          ]
        }
      }
    ]
  },
  {
    "name": "Lineage and Variant information",
    "children": [
      {
        "identifier": "",
        "name": "lineage/clade name",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of the lineage or clade.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the Pangolin or Nextstrain lineage/clade name.",
        "examples": "B.1.1.7"
      },
      {
        "identifier": "",
        "name": "lineage/clade analysis software name",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name of the software used to determine the lineage/clade.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the name of the software used to determine the lineage/clade.",
        "examples": "Pangolin"
      },
      {
        "identifier": "",
        "name": "lineage/clade analysis software version",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The version of the software used to determine the lineage/clade.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the version of the software used ot determine the lineage/clade.",
        "examples": "2.1.10"
      },
      {
        "identifier": "",
        "name": "variant designation",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The variant classification of the lineage/clade i.e. variant, variant of concern.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "If the lineage/clade is considered a Variant of Concern, select Variant of Concern from the pick list. If the lineage/clade contains mutations of concern (mutations that increase transmission, clincal severity, or other epidemiological fa ctors) but it not a global Variant of Concern, select Variant. If the lineage/clade does not contain mutations of concern, leave blank.",
        "examples": "Variant of Concern",
        "itemList": {
          "Variant of Concern (VOC)": {},
          "Variant of Interest (VOI)": {}
        }
      },
      {
        "identifier": "",
        "name": "variant evidence",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The evidence used to make the variant determination.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Select whether the sample was screened using RT-qPCR or by sequencing from the pick list.",
        "examples": "RT-qPCR TaqPath assay: S gene target failure",
        "itemList": {
          "RT-qPCR": {},
          "Sequencing": {}
        }
      },
      {
        "identifier": "",
        "name": "variant evidence details",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "Details about the evidence used to make the variant determination.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the assay and list the set of lineage-defining mutations used to make the variant determination. If there are mutations of interest/concern observed in addition to lineage-defining mutations, describe those here.",
        "examples": ""
      }
    ]
  },
  {
    "name": "Pathogen diagnostic testing",
    "children": [
      {
        "identifier": "",
        "name": "gene name 1",
        "dataType": "select",
        "isBasedOn": "",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The name of the gene used in the diagnostic RT-PCR test.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the full name of the gene used in the test. The gene symbol (short form of gene name) can also be provided. Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI",
        "examples": "E (orf4)",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target 1"
            }
          ],
          "NML_LIMS": [
            {
              "field": "RESULT - CANCOGEN_SUBMITTED_RESLT_1"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "gene_name_1"
            }
          ]
        },
        "itemList": {
          "E gene (orf4)": {
            "exportField": {
              "CNPHI": [
                {
                  "value": "E gene"
                }
              ],
              "NML_LIMS": [
                {
                  "value": "E gene"
                }
              ]
            }
          },
          "M gene (orf5)": {},
          "N gene (orf9)": {},
          "Spike gene (orf2)": {},
          "orf1ab (rep)": {
            "itemList": {
              "orf1a (pp1a)": {
                "itemList": {
                  "nsp11": {}
                }
              },
              "nsp1": {},
              "nsp2": {},
              "nsp3": {},
              "nsp4": {},
              "nsp5": {},
              "nsp6": {},
              "nsp7": {},
              "nsp8": {},
              "nsp9": {},
              "nsp10": {},
              "RdRp gene (nsp12)": {},
              "hel gene (nsp13)": {},
              "exoN gene (nsp14)": {},
              "nsp15": {},
              "nsp16": {}
            }
          },
          "orf3a": {},
          "orf3b": {},
          "orf6 (ns6)": {},
          "orf7a": {},
          "orf7b (ns7b)": {},
          "orf8 (ns8)": {},
          "orf9b": {},
          "orf9c": {},
          "orf10": {},
          "orf14": {},
          "SARS-COV-2 5' UTR": {}
        }
      },
      {
        "identifier": "",
        "name": "diagnostic pcr protocol 1",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name and version number of the protocol used for diagnostic marker amplification.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "The name and version number of the protocol used for carrying out a diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control.",
        "examples": "EGenePCRTest 2"
      },
      {
        "identifier": "",
        "name": "diagnostic pcr Ct value 1",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The Ct value result from a diagnostic SARS-CoV-2 RT-PCR test.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the CT value of the sample from the diagnostic RT-PCR test.",
        "examples": "21",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target 1 CT Value"
            }
          ],
          "NML_LIMS": [
            {
              "field": "RESULT - CANCOGEN_SUBMITTED_RESLT_1CT"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "diagnostic_PCR_CT_value_1"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "gene name 2",
        "dataType": "select",
        "isBasedOn": "gene name 1",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The name of the gene used in the diagnostic RT-PCR test.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the full name of another gene used in an RT-PCR test. The gene symbol (short form of gene name) can also be provided. Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI",
        "examples": "nsp12 (RdRp)",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target 2"
            }
          ],
          "NML_LIMS": [
            {
              "field": "RESULT - CANCOGEN_SUBMITTED_RESLT_2"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "gene_name_2"
            }
          ]
        },
        "itemList": {}
      },
      {
        "identifier": "",
        "name": "diagnostic pcr protocol 2",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name and version number of the protocol used for diagnostic marker amplification.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "The name and version number of the protocol used for carrying out a second diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control.",
        "examples": "RdRpGenePCRTest 3"
      },
      {
        "identifier": "",
        "name": "diagnostic pcr Ct value 2",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The Ct value result from a diagnostic SARS-CoV-2 RT-PCR test.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the CT value of the sample from the second diagnostic RT-PCR test.",
        "examples": "36",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target 2 CT Value"
            }
          ],
          "NML_LIMS": [
            {
              "field": "RESULT - CANCOGEN_SUBMITTED_RESLT_2CT"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "diagnostic_PCR_CT_value_2"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "gene name 3",
        "dataType": "select",
        "isBasedOn": "gene name 1",
        "statusEnumeration": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "minValue": "",
        "maxValue": "",
        "description": "The name of the gene used in the diagnostic RT-PCR test.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the full name of another gene used in an RT-PCR test. The gene symbol (short form of gene name) can also be provided. Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI",
        "examples": "nsp12 (RdRp)",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target 3"
            }
          ],
          "NML_LIMS": [
            {
              "field": "RESULT - CANCOGEN_SUBMITTED_RESLT_3"
            }
          ]
        },
        "itemList": {}
      },
      {
        "identifier": "",
        "name": "diagnostic pcr protocol 3",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The name and version number of the protocol used for diagnostic marker amplification.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "The name and version number of the protocol used for carrying out a second diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control.",
        "examples": "RdRpGenePCRTest 3"
      },
      {
        "identifier": "",
        "name": "diagnostic pcr Ct value 3",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "The Ct value result from a diagnostic SARS-CoV-2 RT-PCR test.",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "Provide the CT value of the sample from the second diagnostic RT-PCR test.",
        "examples": "30",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target 3 CT Value"
            }
          ],
          "NML_LIMS": [
            {
              "field": "RESULT - CANCOGEN_SUBMITTED_RESLT_3CT"
            }
          ]
        }
      }
    ]
  },
  {
    "name": "Contributor acknowledgement",
    "children": [
      {
        "identifier": "",
        "name": "authors",
        "dataType": "xs:token",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "Names of individuals contributing to the processes of sample collection, sequence generation, analysis, and data submission.",
        "valueRequired": "recommended",
        "capitalize": "",
        "guidance": "Include the first and last names of all individuals that should be attributed, separated by a comma.",
        "examples": "Tejinder Singh, Fei Hu, Joe Blogs",
        "exportField": {
          "GISAID": [
            {
              "field": "Authors"
            }
          ],
          "CNPHI": [
            {
              "field": "Authors"
            }
          ],
          "NML_LIMS": [
            {
              "field": "PH_CANCOGEN_AUTHORS"
            }
          ]
        }
      },
      {
        "identifier": "",
        "name": "DataHarmonizer provenance",
        "dataType": "provenance",
        "isBasedOn": "",
        "statusEnumeration": null,
        "minValue": "",
        "maxValue": "",
        "description": "",
        "valueRequired": "",
        "capitalize": "",
        "guidance": "",
        "examples": "",
        "exportField": {
          "GISAID": [
            {
              "field": "DataHarmonizer provenance"
            }
          ],
          "CNPHI": [
            {
              "field": "Additional Comments"
            }
          ],
          "NML_LIMS": [
            {
              "field": "HC_COMMENTS"
            }
          ]
        }
      }
    ]
  }
]