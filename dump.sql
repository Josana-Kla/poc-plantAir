--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: plants; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.plants (
    id integer NOT NULL,
    "plantName" character varying(100) NOT NULL,
    "grownPlantSize" character varying(15) NOT NULL,
    "plantCategory" character varying(50) NOT NULL,
    image character varying(2000) NOT NULL,
    donor character varying(100) NOT NULL,
    status character varying(10) DEFAULT 'available'::character varying NOT NULL,
    description text DEFAULT ''::text
);


--
-- Name: plants_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.plants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: plants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.plants_id_seq OWNED BY public.plants.id;


--
-- Name: plants id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plants ALTER COLUMN id SET DEFAULT nextval('public.plants_id_seq'::regclass);


--
-- Data for Name: plants; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.plants VALUES (3, 'Dionae Um', 'medium', 'Carnivora', 'https://blog.plantei.com.br/wp-content/uploads/2015/08/Planta-Carn%C3%ADvora.jpg', 'Ana', 'available', 'Ama insetos');
INSERT INTO public.plants VALUES (4, 'Nepenthes', 'small', 'Carnivora', 'https://http2.mlstatic.com/D_NQ_NP_674128-MLB29038916262_122018-O.jpg', 'Maria', 'available', NULL);
INSERT INTO public.plants VALUES (1, 'Dionae', 'small', 'Carnivora', 'https://blog.plantei.com.br/wp-content/uploads/2015/08/Planta-Carn%C3%ADvora.jpg', 'Ana', 'donated', 'Ama insetos');
INSERT INTO public.plants VALUES (6, 'Drosera dois', 'small', 'Carnivora', 'https://www.zoopets.com.br/2535-large_default/planta-carnivora-rara-drosera-slackii.jpg', 'João', 'donated', 'Come insetos');


--
-- Name: plants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.plants_id_seq', 6, true);


--
-- Name: plants plants_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plants
    ADD CONSTRAINT plants_pkey PRIMARY KEY (id);


--
-- Name: plants plants_plantName_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plants
    ADD CONSTRAINT "plants_plantName_key" UNIQUE ("plantName");


--
-- PostgreSQL database dump complete
--

