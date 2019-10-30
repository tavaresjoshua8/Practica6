<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Computer extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'operative_system'
    ];

    public function hardware()
    {
        return $this->hasOne(Hardware::class);
    }

    public function location()
    {
        return $this->hasOne(Location::class);
    }

    public function reports()
    {
        return $this->hasMany(Report::class);
    }
}
