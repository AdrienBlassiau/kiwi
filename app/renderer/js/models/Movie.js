// @flow

import type {MovieGenre,MovieStatus} from "./types";

import { Language } from './Language';
import * as theMovieDb from './theMovieDb';

class Movie {
    adult:boolean;
    backdropPath:?string;
    budget:number;
    genres:Array<MovieGenre>;
    id:number;
    imdbId:?number;
    originalLanguage:Language;
    originalTitle:string;
    overview:?string;
    popularity:number;
    posterPath:?string;
    releaseDate:Date;
    revenue:number;
    runtime:?number;
    spokenLanguages:Array<Language>;
    status:MovieStatus;
    tagline:?string;
    title:string;
    video:boolean;
    voteAverage:number;
    voteCount:number;

    constructor(adult: boolean,
                backdropPath: string,
                budget: number,
                genres: Array<MovieGenre>,
                id: number,
                imdbId: number,
                originalLanguage: Language,
                originalTitle: string,
                overview: string,
                popularity: number,
                posterPath: string,
                releaseDate: Date,
                revenue: number,
                runtime: number,
                spokenLanguages: Array<Language>,
                status: MovieStatus,
                tagline: string,
                title: string,
                video: boolean,
                voteAverage: number,
                voteCount: number) {
        this.adult = adult;
        this.backdropPath = backdropPath;
        this.budget = budget;
        this.genres = genres;
        this.id = id;
        this.imdbId = imdbId;
        this.originalLanguage = originalLanguage;
        this.originalTitle = originalTitle;
        this.overview = overview;
        this.popularity = popularity;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.revenue = revenue;
        this.runtime = runtime;
        this.spokenLanguages = spokenLanguages;
        this.status = status;
        this.tagline = tagline;
        this.title = title;
        this.video = video;
        this.voteAverage = voteAverage;
        this.voteCount = voteCount;
    }
}

function successCB(data) {
    console.log("Success callback: " + data);
};

function errorCB(data) {
    console.log("Error callback: " + data);
};

/*theMovieDb.movies.getById({"id":76203,"append_to_response":"credits"}, successCB, errorCB);*/

module.exports = {
  successCB,
};
