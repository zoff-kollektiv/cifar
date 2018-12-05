import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import Constraint from '../constraint';
import createSlug from '../../lib/create-slug';
import findImageById from '../../lib/find-image-by-id';
import styles from './styles';
import translations from '../../../data/translations/columns.json';

const renderPersonValue = (key, value, data) => {
  if (key === 'familyMembersSubjectToSanctions') {
    return (
      <div className="person-info-html">
        {value.map((member, index) => (
          <Fragment key={member}>
            {index === 0 ? '' : ', '}
            <a
              href={`/persons/${createSlug(data.sanctionsCountry)}/${createSlug(
                member
              )}/`}
            >
              {member}
            </a>
          </Fragment>
        ))}
      </div>
    );
  }

  if (Array.isArray(value)) {
    return value.join(', ');
  }

  return (
    <div
      className="person-info-html"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};

export default ({
  images,
  person: {
    frontmatter: { id, sanctionsCountry, name, nativeName, ...table },
    html
  }
}) => {
  const image = findImageById(images.edges, id);

  return (
    <div className="person">
      <Helmet>
        <title>{name}</title>
      </Helmet>

      <style jsx>{styles}</style>

      <Constraint>
        <header className="title-container">
          <h1 className="title">
            <a
              href={`/persons/${createSlug(sanctionsCountry)}/`}
              className="back"
            >
              ‹ All affected persons of {sanctionsCountry}
            </a>
            {name}
            <small className="title-native">{nativeName}</small>
          </h1>

          {image && (
            <img
              src={image.node.fluid.src}
              className="image"
              alt={`Portrait ${name}`}
            />
          )}
        </header>

        <div className="person-story">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <h2>Information</h2>

        <dl>
          {Object.keys(table).map(key => (
            <Fragment key={key}>
              {table[key] &&
                ((Array.isArray(table[key]) && table[key].length > 0) ||
                  !Array.isArray(table[key])) && (
                  <>
                    <dt>{translations[key] || key}</dt>
                    <dd>
                      {renderPersonValue(key, table[key], { sanctionsCountry })}
                    </dd>
                  </>
                )}
            </Fragment>
          ))}
        </dl>
      </Constraint>
    </div>
  );
};

export const fragment = graphql`
  fragment person on MarkdownRemark {
    frontmatter {
      id
      nativeName
      name
      identifyingInformation
      dateOfBirth
      placeOfBirth
      countryOfResidence
      aliases
      familyMembers
      familyMembersSubjectToSanctions
      suspectedOrConfirmedLinksToLegalEntities
      suspectedOrConfirmedOverseasProperties
      suspectedOrConfirmedLinksToBankAccounts
      suspectedOrConfirmedLinksToOtherAssets
      estimatesOfAssetsFrozenOrConfiscated
      estimatesOfAssetsReturned
      typeOfSanctions
      startOfSanctions
      sanctionsCountry
    }
    html
  }
`;
