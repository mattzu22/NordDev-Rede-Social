import styled from "styled-components";

export const PostStyle = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;

  .post + .post {
    margin-top: 2rem;
  }

  header {
    display: flex;
    justify-content: space-between;

    time {
      align-self: center;
      font-size: 0.875rem;
      color: var(--gray-400);
    }
  }

  .content {
    line-height: 1.6;
    color: var(--gray-300);
    margin-top: 1.5rem;

    p {
      margin-top: 1rem;
    }

    a {
      font-weight: bold;
      color: var(--green-500);
      transition: 0.4s ease;
      padding: 3px;

      &:hover {
        color: var(--green-300);
      }
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: calc(3rem + 12px);
      height: calc(3rem + 12px);
      border-radius: 8px;
      border: 4px solid var(--gray-800);
      outline: 2px solid var(--green-500);
      object-fit: 100%;
    }

    .author-info {
      display: flex;
      flex-direction: column;

      strong {
        color: var(--gray-100);
        line-height: 1.6;
      }

      span {
        font-size: 0%.875rem;
        color: var(--gray-400);
        line-height: 1.6;
      }
    }
  }

  .form-comment {
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gray-600);

    strong {
      line-height: 1.6;
      color: var(--gray-100);
    }

    &:focus-within footer {
      visibility: visible;
      max-height: none;
    }

    textarea {
      width: 100%;
      background: var(--gray-900);
      border: 0;
      resize: none;
      height: 6rem;
      padding: 1rem;
      border-radius: 8px;
      color: var(--gray-100);
    }

    footer {
      visibility: hidden;
      max-height: 0;
    }

    button {
      padding: 1rem 1.5rem;
      margin-top: 1rem;
      border-radius: 8px;
      border: 0;
      background: var(--green-500);
      font-weight: bold;
      cursor: pointer;
      /* transition: 0.3s ease; */
      color: var(--white);

      &:hover {
        background: var(--green-300);
      }
    }
  }

  .comment-list{
    margin-top: 2rem;
  }
`;
